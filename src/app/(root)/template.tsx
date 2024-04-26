'use client'
import { ReactNode } from "react"
import { motion } from "framer-motion";

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div className='h-full'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
            {children}
        </motion.div>
    )
}
export default Template