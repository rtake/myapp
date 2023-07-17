import { useState, memo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num+1);
    };

    const onClickReset = () => {
        setNum(0);
    }

    return (
        <div>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset} />
            <Child4/>
        </div>
    );
});

export default App;