import { Section, SectionTitle, Container} from "../../styles/GlobalComponents";
import { ProjectCard, GridContainer, Img} from "./ProjectsStyles";
import { projects } from '../constants/constants';
import Visible from "../Visible/Visible"

export default function Projects() {
    return (
        <Section
            id="projects"
            >
            <Container>
            <Visible label="Projects"></Visible>
            <SectionTitle>Projects</SectionTitle>
            <GridContainer>
                
                {projects.map((p, i) => {
                    return (
                        <ProjectCard key={i}>
                            <Img src={p.image}></Img>
                            <p>{p.title}</p>
                        </ProjectCard>
                    )
                })}
            </GridContainer>
            </Container>
        </Section>
    )
}