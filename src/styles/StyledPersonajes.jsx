import styled from 'styled-components'

export const Cards = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`
export const Card = styled.div`
    width: 25%;
    margin: 3% auto;
    border-radius: 8px;
    padding: 2%;
    box-shadow: 1px 2px 50px 23px #b8b8b8;
    cursor: pointer;
    :hover{
        width: 26.5%;
        transition: all .7s ease;
    }
`
export const ContImg = styled.div`
    width: 80%;
    margin: auto;
`
export const Personaje = styled.img`
    width: 90%;
    border-radius: 8px;
`