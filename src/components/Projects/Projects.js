import { Section, SectionTitle, Container} from "../../styles/GlobalComponents";
import { ProjectCard, GridContainer, Img} from "./ProjectsStyles";
import { projects } from '../constants/constants';

export default function Projects() {
    return (
        <Section>
            <Container>
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