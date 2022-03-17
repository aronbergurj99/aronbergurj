import { Section, SectionTitle, Container, SectionText, SectionSubTitle} from '../../styles/GlobalComponents';
import {SkillsContainer, BarContainer, Bar, Row, RowTextDiv} from './SkillsStyles';
import Visible from '../Visible/Visible';
const SkillBar = ({fill, languege}) => {
    return (
        <Row>
            <RowTextDiv><SectionSubTitle>{languege}</SectionSubTitle></RowTextDiv>
            <BarContainer>
                <Bar fill={fill}>
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
                <SectionTitle>Skills</SectionTitle>
                <SectionText>
                    These are the technologies that I am most comfortable with.
                </SectionText>
                <SkillsContainer>
                    <SkillBar fill="85%" languege="Python"/>
                    <SkillBar fill="60%" languege="c#"/>      
                    <SkillBar fill="80%" languege="Javascript"/>      
                    <SkillBar fill="70%" languege="React"/>      
                    <SkillBar fill="80%" languege="Postgresql"/>      
                    <SkillBar fill="60%" languege="MongoDB"/>      

                </SkillsContainer>
            </Container>
        </Section>
    )
}