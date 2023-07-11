import './EngineerCard.css'

import { motion } from "framer-motion";


function EngineerCard({ job, svg }) {

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: .7 }}
            viewport={{ once: true }}
            className='container-front-end'>
            {svg}
            <p>{job}</p>
        </motion.div>
    )
}

export default EngineerCard;