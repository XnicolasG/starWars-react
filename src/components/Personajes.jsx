import React, { useEffect, useState } from 'react';
import { url } from '../helpers/getData';
import { Card, Cards, ContImg, Personaje } from '../styles/StyledPersonajes';


const Personajes = () => {

    const [items, setItems] = useState([])
    
    const getData = async() =>{
        const resp = await fetch(url);
        const data = await resp.json();
    
       setItems(data.results)
    }

    useEffect(()=>{
        getData();
    }, [])
    console.log(items);
    
  return  (
  <Cards>
      {
          items.map(perso=>(
              <Card key={perso.id}>
                  <center>
                  <h2>{perso.name}</h2>
                  </center>
                  <ContImg>
                    <center>
                  <Personaje src={perso.image} alt="personaje" />
                  </center>
                  </ContImg>
              </Card>
          ))
      }
  </Cards>
  );
};

export default Personajes;
