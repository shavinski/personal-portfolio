import './EngineerCard.css'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function EngineerCard({ job, svg }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: .7 }}
            viewport={{ once: true }}
            className='container-front-end'>
            {svg}
            <p>{job}</p>
        </motion.div>
    )
}

export default EngineerCard;