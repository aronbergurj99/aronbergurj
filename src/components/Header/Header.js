import Link from 'next/link';
import {AiFillGithub } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink} from './HeaderStyles';

export default function Header() {
    return (
        <Container>
            <Div1>
                <Link href="/">
                    <NavLink>ABJ</NavLink>
                </Link>
            </Div1>
            <Div2>
                <Link href="#aboutme">
                    <NavLink>About Me</NavLink>
                </Link>
                <Link href="#aboutme">
                    <NavLink>Education</NavLink>
                </Link>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
                <Link href="#projects">
                    <NavLink>Skills</NavLink>
                </Link>
                <Link href="#projects">
                    <NavLink>Contact me</NavLink>
                </Link>
            </Div2>
            <Div3>
                <Link href="#github">
                    <AiFillGithub size="3rem" />
                </Link>
            </Div3>
        </Container>
    )
}