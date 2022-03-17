import { Section, SectionTitle, Container, SectionSubText, SectionSubTitle, SectionText} from "../../styles/GlobalComponents"
import { Div1, Div2, Heading1, Text1, EducationContainer} from "./EducationStyles"
import Visible from "../Visible/Visible"

export default function Education() {
    return (
        <Section 
            blue
            front
            id="education"
            
            >
            <Container>
                <Visible label="Education"></Visible>
                <SectionTitle>Education</SectionTitle>
                <EducationContainer>
                    <Div2>
                        <Heading1>Háskólinn í Reykjavík</Heading1>
                    </Div2>
                    <Div1>
                        <Text1>Computer Science BSc</Text1>
                    </Div1>
                    <Div2>
                        <Text1>2020 - today</Text1>
                    </Div2>
                </EducationContainer>
                <EducationContainer>
                    <Div2>
                        <Heading1>Fjölbrautaskólinn í Breiðhollti</Heading1>
                    </Div2>
                    <Div1>
                        <Text1>Matriculation course of natural science</Text1>
                    </Div1>
                    <Div2>
                        <Text1>2015 - 2019</Text1>
                    </Div2>
                </EducationContainer>
            </Container>
        </Section>
    )
}