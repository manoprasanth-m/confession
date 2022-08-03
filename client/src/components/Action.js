import React from 'react';

const Action = (props) => (
    <div>
        <button 
        onClick={props.pickOneConfess}
        disabled={!props.hasOptions}
        className="big-button">Choose Random
        </button>
    </div>
)

export default Action