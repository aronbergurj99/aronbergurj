import { useContext } from 'react';

import { Layout } from "../layout/Layout";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Skills from  "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { SectionDivider } from "../styles/GlobalComponents";

import { motion } from "framer-motion";

export default function Home() {
    return (
        <Layout >
            <About ></About>
            <SectionDivider flip></SectionDivider>
            <Education front ></Education>
            <SectionDivider/>
            <Projects></Projects>
            <SectionDivider flip></SectionDivider>
            <Skills></Skills>
            <SectionDivider></SectionDivider>
            <Contact></Contact>
        </Layout>
    )
}
