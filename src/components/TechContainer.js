import React from "react";
import './TechContainer.css'

// import { motion } from "framer-motion";

function TechContainer({ name, svg }) {
    return (
        <div
            // initial={{ opacity: 0, x: -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ ease: "easeInOut", duration: .7, delay: .1 }}
            // viewport={{ once: true }}
            className='container-lang'>
            {svg}
            <p>{name}</p>
        </div>
    )
}

export default TechContainer