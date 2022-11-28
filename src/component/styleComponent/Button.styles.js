import styled from "styled-components";


export const Button = styled.button`
  color: ${ props  => props.secondary ? 'palevioletred' : '#ffffff'};
  background-color: ${ props  => props.secondary ? '#ffffff' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`