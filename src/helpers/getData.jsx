export const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json'

export const getData = async() =>{
    const resp = await fetch(url);
    const data = await resp.json();
   return data.results
}