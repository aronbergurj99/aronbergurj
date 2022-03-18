import {useState} from 'react';

import { Section, SectionTitle, Container} from "../../styles/GlobalComponents";
import { ProjectCard, GridContainer, Img, ProjectCardOverlay, ProjectCardTitleDiv, ProjectCardText} from "./ProjectsStyles";
import { projects } from '../constants/constants';
import Visible from "../Visible/Visible"
import AnimatedTitle from "../../styles/GlobalComponents/AnimatedTitle";

import {motion} from 'framer-motion';


function Card (props) {
    const {image, title, description, link} = props.item;
    const [hovering, setHovering] = useState(false);
    return (

        <ProjectCard
            as={motion.a}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            animate={hovering ? {
                scale: 1.2,
            } : {
                scale: 1,
            }}
            initial={{
                opacity: 0,
                x: 200,
            }}
            whileInView={{ 
                opacity: 1,
                x: 0,
            }}
            transition={{
                opacity : {duration: 0.8,
                delay: 0.5 * props.index + 1,},
                x: {duration: 0.8,
                    delay: 0.5 * props.index + 1,}
            }}
            viewport={{ once: true }}
            href={link}
            target="_blank"
        >
            <Img src={image}></Img>
            <ProjectCardTitleDiv>

                <p>{title}</p>
            </ProjectCardTitleDiv>


                <ProjectCardOverlay
                    as={motion.div}
                    animate={hovering ? {
                        opacity: 1,
                    } : {
                        opacity: 0,
                    }}

                >
                <ProjectCardText>
                {description}
                </ProjectCardText>
                </ProjectCardOverlay>
        </ProjectCard>
    )
}


export default function Projects() {
    return (
        <Section
            id="projects"
            >
            <Container>
            <Visible label="Projects"></Visible>
            <AnimatedTitle>Projects</AnimatedTitle>
            <GridContainer>
                
                {projects.map((p, i) => {
                    return (
                        <Card item={p} key={i} index={i}/>
                    )
                })}
            </GridContainer>
            </Container>
        </Section>
    )
}