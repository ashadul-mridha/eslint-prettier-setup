import React from 'react'
import { Description, DisplayFlex, Div, Image, SubTitle, Title, Wrapper } from '../styleComponent/Nftcard.styles';
import topImg from '../../asstes/images/image-equilibrium.jpg'
import { useTheme } from 'styled-components';

function NFTCard() {

    const theme = useTheme()

    console.log('theme', theme);
  return (
    <>
        <Wrapper>
            <Image src={topImg} alt="card image" />
            <Title>Equiribrium #3429</Title>
            <Description>our equiribrium collection promotes balance and clam </Description>
            <DisplayFlex direaction="row">
                <Div>
                    <SubTitle>0.041ETH</SubTitle>
                </Div>
                <Div>
                    <SubTitle>3 days left</SubTitle>
                </Div>
            </DisplayFlex>
        </Wrapper>
    </>
  )
}

export default NFTCard