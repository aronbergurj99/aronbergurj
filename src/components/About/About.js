
import { Section, SectionTitle, SectionText, Container} from "../../styles/GlobalComponents"
import Visible from "../Visible/Visible";

import { motion } from 'framer-motion';
import AnimatedTitle from "../../styles/GlobalComponents/AnimatedTitle";

export default function About() {

    return (
        <Section
            id="aboutme"
            >
            <Container>
                <Visible label="About me"></Visible>
                <AnimatedTitle>
                    About me
                </AnimatedTitle>
                <SectionText
                    as={motion.div}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{ 
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                    }}
                    viewport={{ once: true }}
                >
                    My name is Aron Bergur Jóhannsson, I grew up in Reykjavík and I was born in 1999.
                     I am a student in computer science at Reykjavík University. 
                     I have a passion for programming and technology. I am always trying learn more.
                    
                </SectionText>
                <SectionText
                    as={motion.div}
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{ 
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                    }}
                    viewport={{ once: true }}
                >My hobbies include programming, game development and dogs.</SectionText>
            </Container>

        </Section>
    )
}