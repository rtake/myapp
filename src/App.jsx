import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };

    return (
        <div>
            <hl style={{ color: "red" }}>こんにちは！</hl>
            <ColoredMessage color="blue" message="元気ですか？" />
            <p style={contentPinkStyle}>元気です！</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;