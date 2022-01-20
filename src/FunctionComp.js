import React from "react";
const FunctionComp = props => {
    console.log('%c render() du Function Component enfant', 'color: purple')
    return (
        <div>
            <p>
                <span className="purple">Function Component: </span>
                {props.name}
            </p>
        </div>
    )
}

export default React.memo(FunctionComp);