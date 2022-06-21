import React from "react";

const Hello = (props) => {
    return (
        <div>
            <h1>
                Hello {props.name} {props.sirname}
            </h1>
        </div>
    )
    // return React.createElement('div',{id : 'hello',className : 'dummyclass'},React.createElement('h1',null,'Hello Praveen'))
}

export default Hello