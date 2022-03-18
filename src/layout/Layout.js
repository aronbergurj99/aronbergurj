import { useState } from 'react';

import { Container } from './LayoutStyles';
import Header from '../components/Header/Header';
import { SelectedTabContext } from '../Helpers/Context';

import { tabs } from '../components/constants/constants';

export const Layout = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].label);
    const [switching, setSwitching] = useState(false);
    return (
        <Container as={SelectedTabContext.Provider} value={{selectedTab, setSelectedTab, switching, setSwitching}}>
            <Header/>
            <main>{children}</main>
        </Container>
    )
}