import React from 'react'
import { Description, DisplayFlex, Image, Title, Wrapper } from '../styleComponent/Nftcard.styles';
import topImg from '../../asstes/images/image-equilibrium.jpg'

function NFTCard() {
  return (
    <>
        <Wrapper>
            <Image src={topImg} alt="card image" />
            <Title>Equiribrium #3429</Title>
            <Description>our equiribrium collection promotes balance and clam </Description>
            <DisplayFlex direaction="row">
                <div>
                    <p>0.041ETH</p>
                </div>
                <div>
                    <p>3 days left</p>
                </div>
            </DisplayFlex>
        </Wrapper>
    </>
  )
}

export default NFTCard