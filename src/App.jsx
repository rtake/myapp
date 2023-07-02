export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <hl>こんにちは！</hl>
            <p>お元気ですか？</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
}

export default App;