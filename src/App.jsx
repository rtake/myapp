import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <hl style={{ color: "red" }}>こんにちは！</hl>
            <ColoredMessage color="blue" message="元気ですか？" />
            <ColoredMessage color="pink" message="元気です！" />
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;