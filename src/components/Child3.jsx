const style = {
    height: "50px",
    backgroundColor: "lightglay"
}

export const Child3 = () => {
    console.log("Child3 rendering");

    return (
        <div style={style}>
            <p>Child3</p>
        </div>
    )
}