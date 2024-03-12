import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div style={{ position: "relative", width, overflow: "hidden"}}>
            <AnimatePresence>
                {inView && (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0},
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};   
