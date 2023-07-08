import { useState } from "react";
import { Child4 } from "./components/Child4";

export const App = () => {
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num+1);
    };

    return (
        <div>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child4/>
        </div>
    );
}

export default App;