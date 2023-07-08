const style = {
    height: "50px",
    backgroundColor: "green"
}

export const Child3 = () => {
    console.log("Child3 rendering");

    return (
        <div style={style}>
            <p>Child3</p>
        </div>
    )
}