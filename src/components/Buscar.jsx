import React, { useEffect, useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import UseForm from '../hooks/UseForm';
import querystring from 'query-string'
import { Contimg, FotoPers, GrCont, ICont, IIConst, InputBus, Nombre, Result } from '../styles/StyledBuscador';
import { getData } from '../helpers/getData';

const Buscar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    // pasando a string la busqueda
    const {q = ''} = querystring.parse(location.search)
    const [busq, handleInput] = UseForm({
        busqueda:q,
    })

    // destructurando valor atrapado en input
    const {busqueda} = busq

    // Crear otro state con datos para traerlos por busqueda de nombre
    const [personajes, setPersonajes]= useState([])
    // agregando a personajes los datos de peticon fetch
    const Obtener = async ()=>{
        const getDatos = await getData();
        setPersonajes(getDatos)
    }
    useEffect(()=>{
        Obtener()
    }, [])

    // recibimos por medio de "name" lo que es escribe en input guardado como busqueda
    const FindbyName = (name) => {
        name = name.toLocaleLowerCase()
        return personajes.filter(item=> item.name.toLocaleLowerCase().includes(name))
    };

    // enviando paramentros a FindByName
    const NameFilter = FindbyName(busqueda)

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`?q=${busqueda}`)
    }
  return (
      <GrCont>
  <ICont>
      <center>
      <h1>Buscador</h1>
      </center>
      <div>
      <form onSubmit={handleSubmit}>
        <InputBus 
        type="text" 
        placeholder='Busca un personaje'
        name='busqueda'
        value={busqueda}
        onChange={handleInput}
        />
      </form>
      </div>
      </ICont>
      {/* ---------resultados----------- */}
      <IIConst>
        <center>
        <h1>Resultados</h1>
        </center>
        {
            NameFilter.map(item=>(
                <Result key={item.id}>
                    <Nombre>{item.name}</Nombre>
                    <Contimg>
                        <FotoPers src={item.image} alt="pers" />
                    </Contimg>
                </Result>
            ))
        }
      </IIConst>
      </GrCont>
  );
};

export default Buscar;
