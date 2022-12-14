
import styled, { withTheme } from 'styled-components';
import UseCallbackFn from './component/CallBackAndMemo/UseCallbackFn';
import ClickClassCounter from './component/clickedCounter/ClickClassCounter';
import ClickedCounter from './component/clickedCounter/ClickedCounter';
import Clock from './component/Clock/Clock';
import HoverClassCounter from './component/hoverCounter/HoverClassCounter';
import HoverCounter from './component/hoverCounter/HoverCounter';
import RenderPropsCounter from './component/RenderPropsCounter';
import { Button } from './component/styleComponent/Button.styles';
import NFTCard from './component/nftCardDesign/NFTCard';
import { GlobalStyle } from './component/styleComponent/Global.style';
import { ThemeProvider } from 'styled-components';

const TomatoButton = styled(Button)`
  color: tomato;
  background-color: #ffffff;
  border-color: tomato;

  &:hover{
    color: #ffffff;
    background-color: tomato;
    cursor: pointer;
  }
`

const theme = {
  dark : {
    color: 'white',
    background : 'black'
    
  },
  light : {
    color: 'black',
    background : 'white'
    
  }
}


function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <Button />
            <Accordian /> */}
            {/* <Clock local="bn-BD" /> */}
            {/* <ClickedCounter />
            <HoverCounter /> */}
            {/* <ClickClassCounter />
            <HoverClassCounter /> */}
            {/* <RenderPropsCounter render={ (counter , increment) => <ClickClassCounter counter={counter} increment={increment} />} />
            <RenderPropsCounter render={ (counter , increment) => <HoverClassCounter counter={counter} increment={increment} />} /> */}
            {/* <UseCallbackFn /> */}
            {/* <Button>Normal</Button>
            <Button secondary>Seconday Button</Button>
            <TomatoButton>Tomato Button</TomatoButton> */}

            <NFTCard />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
