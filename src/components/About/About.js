
import { Section, SectionTitle, SectionText, Container} from "../../styles/GlobalComponents"
import Visible from "../Visible/Visible"
export default function About() {

    return (
        <Section
            id="aboutme"
            >
            <Container>
                <Visible label="About me"></Visible>
                <SectionTitle>About me</SectionTitle>
                <SectionText>My name is Aron Bergur Jóhannsson, I grew up in Reykjavík and I was born in 1999. I am a student in computer science at Reykjavík University. I have a passion for programming and technology, and I am always trying learn more.</SectionText>
                <SectionText>My hobbies include programming, game development and dogs.</SectionText>
            </Container>

        </Section>
    )
}