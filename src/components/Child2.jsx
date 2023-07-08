import { memo } from "react"

const style = {
    height: "50px",
    backgroundColor: "lightglay"
}

export const Child2 = memo(() => {
    console.log("Child2 rendering");

    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
});