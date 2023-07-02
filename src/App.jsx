import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <hl style={{ color: "red" }}>こんにちは！</hl>
            <ColoredMessage color="blue">元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;