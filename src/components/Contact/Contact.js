
import { Section, SectionTitle, Container, SectionText} from '../../styles/GlobalComponents'
import { Button } from './ContactStyles'
import {AiOutlineSend} from 'react-icons/ai';
import Visible from '../Visible/Visible';
export default function Contact() {
    return (
        <Section id="contactme" >
            <Container>
                <Visible label="Contact me"/>
                <SectionTitle>Contact me</SectionTitle>
                <SectionText>
                    Feel free to contact me at aronbj20@ru.is or checkout my github profile.
                </SectionText>
                <Button>Email me! <AiOutlineSend style={{marginLeft: "1rem"}} size="3rem"/></Button>
            </Container>
        </Section>
    )
}