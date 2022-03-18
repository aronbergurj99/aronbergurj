import { useContext } from 'react';

import Link from 'next/link';
import {AiFillGithub } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, TabSelected, LinkDiv} from './HeaderStyles';
import {tabs} from '../constants/constants';
import { motion } from 'framer-motion';
import { SelectedTabContext } from '../../Helpers/Context';

export default function Header() {
    //const [selectedTab, setSelectedTab] = useState(tabs[0].label)
    const {selectedTab, setSelectedTab, setSwitching} = useContext(SelectedTabContext);
    
    return (
        <Container>
            <Div1>
                <Link href="/">
                    <NavLink>ABJ</NavLink>
                </Link>
            </Div1>
            <Div2>
                {tabs.map((item) => (
                    
                    <LinkDiv key={item.label} >
                        <Link href={item.href} >
                            <NavLink onClick={() => {
                                setSwitching(true);
                                setSelectedTab(item.label);
                            }}>
                                {item.label}
                            </NavLink>
                        </Link>
                            {item.label === selectedTab ? (
                                <TabSelected as={motion.div} layoutId="underline"></TabSelected>
                            ) : null}
                    </LinkDiv>

                ))}

            </Div2>
            <Div3>
                <a href="https://github.com/aronbj20" target="_blank">
                    <p style={{color: "white", cursor: "pointer"}}><AiFillGithub size="3rem"/></p>
                </a>
            </Div3>
        </Container>
    )
}