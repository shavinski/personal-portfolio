import React from "react";
import './TechContainer.css'

function TechContainer({ name, svg }) {
    return (
        <div className='container-lang'>
            {svg}
            <p>{name}</p>
        </div>
    )
}

export default TechContainer