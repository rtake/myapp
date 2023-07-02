import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num+1);
    };

    return (
        <div>
            <hl style={{ color: "red" }}>こんにちは！</hl>
            <ColoredMessage color="blue">元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </div>
    );
}

export default App;