import styled from "styled-components";


export const Wrapper = styled.div`
    width: 30%;
    /* height: 60vh; */
    margin: 50px auto;
    background-color: ${ props => props.theme.dark.background};
    padding: 20px;
    border-radius: 5%;
`


export const Image = styled.img`
    width: 100%;
    height: 370px;
    overflow: hidden;
    border-radius: 5%;
`

export const Title = styled.h5`
    font-size: 17px;
    color: ${ props => props.theme.dark.color};
    font-weight: 500;
    font-family: 'Courier Prime', monospace;
    text-transform: capitalize;
    margin-top: 15px;
`
export const Description = styled.p`
    font-size: 13px;
    color: ${ props => props.theme.dark.color};
    font-weight: 400;
    font-family: 'Courier Prime', monospace;
    margin-top: 15px;
`

export const SubTitle = styled.p`
    font-size: 11px;
    color: ${ props => props.theme.dark.color};
    font-weight: 400;
    font-family: 'Courier Prime', monospace;
    margin-top: 15px;
`
export const DisplayFlex = styled.div`
    display: flex;
    flex-direction : ${props => props.direaction === "column" && "column"};
    justify-content : space-between;
    align-items: center;
`

export const Div = styled.div`
    display: block;
`



