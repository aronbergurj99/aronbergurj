
import { SectionTitle } from ".";
import { motion } from 'framer-motion';


export default function AnimatedTitle(props) {
        const {children} = props;
    return (
        <SectionTitle
            as={motion.div}
            initial={{
                opacity: 0.0,
                scale: 3,
                y: -100,
                x: -200,
            }}
            whileInView={{ 
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 0.3,
            }}
            viewport={{ once: true }}
        >
            {children}
        </SectionTitle>
    )
}