
import UseCallbackFn from './component/CallBackAndMemo/UseCallbackFn';
import ClickClassCounter from './component/clickedCounter/ClickClassCounter';
import ClickedCounter from './component/clickedCounter/ClickedCounter';
import Clock from './component/Clock/Clock';
import HoverClassCounter from './component/hoverCounter/HoverClassCounter';
import HoverCounter from './component/hoverCounter/HoverCounter';
import RenderPropsCounter from './component/RenderPropsCounter';


function App() {
    return (
        <div className="App">
            {/* <Button />
            <Accordian /> */}
            {/* <Clock local="bn-BD" /> */}
            {/* <ClickedCounter />
            <HoverCounter /> */}
            {/* <ClickClassCounter />
            <HoverClassCounter /> */}
            {/* <RenderPropsCounter render={ (counter , increment) => <ClickClassCounter counter={counter} increment={increment} />} />
            <RenderPropsCounter render={ (counter , increment) => <HoverClassCounter counter={counter} increment={increment} />} /> */}
            <UseCallbackFn />
        </div>
    );
}

export default App;
