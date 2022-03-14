import { Container } from './LayoutStyles';
import Header from '../components/Header/Header';

export const Layout = ({children}) => {
    return (
        <Container>
            <Header/>
            <main>{children}</main>
        </Container>
    )
}