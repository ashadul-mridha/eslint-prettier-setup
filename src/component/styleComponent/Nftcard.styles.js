import styled from "styled-components";


export const Wrapper = styled.div`
    width: 30%;
    /* height: 60vh; */
    margin: 50px auto;
    background-color: gray;
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
    color: #ffffff;
    font-weight: 500;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-top: 20px 0px 0px 0px;
    margin: 0px;
`
export const Description = styled.p`
    font-size: 13px;
    color: #ffffff;
    font-weight: 400;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-top: 20px 0px 0px 0px;
    margin: 0px;
`
export const DisplayFlex = styled.div`
    display: flex;
    flex-direction : ${props => props.direaction === "column" && "column"};
    justify-content : space-between;
    align-items: center;
`



