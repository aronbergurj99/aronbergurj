import { Section, SectionTitle, Container, SectionText, SectionSubTitle} from '../../styles/GlobalComponents';
import {SkillsContainer, BarContainer, Bar, Row, RowTextDiv, PercentageDiv, Triangle} from './SkillsStyles';
import Visible from '../Visible/Visible';
import {motion} from 'framer-motion';
import { skills } from '../constants/constants';
import {useState, useEffect} from 'react';

import AnimatedTitle from '../../styles/GlobalComponents/AnimatedTitle';

function onUpdate(latest, setFillProgress)
{
    setFillProgress("" + Math.round(parseFloat(latest.width)) + "%");
}

const SkillBar = (props) => {
    const {percentage, language} = props.item;
    const {index} = props;
    const [fillprogress, setFillProgress] = useState(0);


    return (
        <Row
            as={motion.div}
            initial={{
                opacity: 0,
                
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
                delay: 0.5,
            }}
            viewport={{ once: true }}
        >
            <SectionSubTitle>{language}</SectionSubTitle>
            <BarContainer>
                <Bar 
                    fill={percentage}
                    as={motion.div}
                    initial={{
                        width: 0,
                        
                    }}
                    whileInView={{
                        width: percentage,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        type: "tween",
                    }}
                    onUpdate={(latest) => onUpdate(latest, setFillProgress)}
                    viewport={{ once: true }}
                
                >
                    <PercentageDiv>
                        <p>{fillprogress}</p>
                        <Triangle>

                        </Triangle>
                    </PercentageDiv>
                </Bar>
            </BarContainer>
        </Row>
    )
}

export default function Skills() {
    return (
        <Section blue id="skills">
            <Container>
                <Visible label="Skills"></Visible>
                <AnimatedTitle>Skills</AnimatedTitle>
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
                    viewport={{once: true}}
                >
                    These are the technologies that I am most comfortable with.
                </SectionText>
                <SkillsContainer>
                    {skills.map((item, i) => (
                        <SkillBar key={i} index={i} item={item}/>
                    ))}
      
                </SkillsContainer>
            </Container>
        </Section>
    )
}