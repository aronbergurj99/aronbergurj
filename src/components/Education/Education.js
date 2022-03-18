import { Section, SectionTitle, Container, SectionSubText, SectionSubTitle, SectionText } from "../../styles/GlobalComponents"
import { Div1, Div2, Heading1, Text1, EducationContainer } from "./EducationStyles"
import Visible from "../Visible/Visible"
import AnimatedTitle from "../../styles/GlobalComponents/AnimatedTitle"
import {education} from '../constants/constants';
import {motion} from 'framer-motion';

function EducucationCard(props) {
    const {item, index} = props;
    const {school, education, date} = item;
    return(
        <EducationContainer
            as={motion.div}
            initial={{
                opacity: 0,
            }}
            whileInView={{ 
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                delay: 0.5 * index + 1,
            }}
            viewport={{ once: true }}
        >
            <Div2>
                <Heading1>{school}</Heading1>
            </Div2>
            <Div1>
                <Text1>{education}</Text1>
            </Div1>
            <Div2>
                <Text1>{date}</Text1>
            </Div2>
        </EducationContainer>
    )
}

export default function Education() {

    return (
        <Section
            blue
            front
            id="education"

        >
            <Container>
                <Visible label="Education"></Visible>
                <AnimatedTitle>Education</AnimatedTitle>
                {education.map((item, i) => {
                    return (
                        <EducucationCard key={i} index={i} item={item}/>
                    )
                })}
            </Container>
        </Section>
    )
}