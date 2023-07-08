const style = {
    height: "50px",
    backgroundColor: "lightglay"
}

export const Child2 = () => {
    console.log("Child2 rendering");

    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
}