export const App = () => {
    const onClickButton = () => {
        alert();
    };

    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };

    return (
        <div>
            <hl style={{ color: "red" }}>こんにちは！</hl>
            <p style={contentStyle}>お元気ですか？</p>
            <p style={contentPinkStyle}>元気です！</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;