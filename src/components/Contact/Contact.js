
import { Section, SectionTitle, Container, SectionText} from '../../styles/GlobalComponents'
import { Button } from './ContactStyles'
import {AiOutlineSend} from 'react-icons/ai';
import Visible from '../Visible/Visible';
import {motion } from 'framer-motion';

import AnimatedTitle from '../../styles/GlobalComponents/AnimatedTitle';
export default function Contact() {
    return (
        <Section id="contactme" >
            <Container>
                <Visible label="Contact me"/>
                <AnimatedTitle>Contact me</AnimatedTitle>
                <SectionText
                    as={motion.p}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{ 
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}
                    viewport={{ once: true }}
                >
                    Feel free to contact me at <a style={{textDecoration: "underline"}} href="mailto: aronbj20@ru.is">aronbj20@ru.is</a> or checkout my <a style={{textDecoration: "underline"}} target="_blank" href="https://github.com/aronbj20">github</a> profile.
                </SectionText>
                <a style={{color: "white", width:"fit-content"}} href="mailto: aronbj20@ru.is">
                <Button
                    as={motion.div}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{ 
                        opacity: 1,
                    }}
                    transition={{
                        opacity: {duration: 0.8, delay:1},
                        scale: {duration: 0.1}
                    }}
                    whileHover={{
                        scale: 1.1,
                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                    viewport={{ once: true }}

                >
                    Email me! <AiOutlineSend style={{marginLeft: "1rem"}} size="3rem"/></Button>
                </a>
            </Container>
        </Section>
    )
}