
import ClickedCounter from './component/clickedCounter/ClickedCounter';
import Clock from './component/Clock/Clock';
import HoverCounter from './component/hoverCounter/HoverCounter';


function App() {
    return (
        <div className="App">
            {/* <Button />
            <Accordian /> */}
            {/* <Clock local="bn-BD" /> */}
            <ClickedCounter />
            <HoverCounter />
        </div>
    );
}

export default App;
