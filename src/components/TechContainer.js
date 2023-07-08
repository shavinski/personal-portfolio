import React from "react";
import './TechContainer.css'
import { motion } from "framer-motion";


function TechContainer({ name, svg }) {
    return (
        <div className='container-lang'>
            {svg}
            <p>{name}</p>
        </div>
    )
}

export default TechContainer