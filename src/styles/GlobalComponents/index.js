import { AiOutlineRotateLeft } from 'react-icons/ai';
import styled from 'styled-components';
export const Section = styled.section`
    display: flex;
    position: relative;
    padding-top: 100px;
    margin: 0 auto;
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.blue ? props.theme.colors.background2 : props.theme.colors.background1};
    @media ${(props) => props.theme.breakpoints.sm} {
        padding-top: 50px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 1040px;
    padding: 32px 48px 0
    height: 100vh;
    padding: 40px;

`;

export const SectionTitle = styled.h2`
    font-weight: 800;
    font-size: 75px;
    line-height: 72px;
    width: max-content;
    max-widht: 100%;
    margin-bottom: 16px;

    @media ${props => props.theme.breakpoints.md}{
        font-size: 56px;
        line-height: 56px;
        margin-bottom: 12px;
    }
    
    @media ${props => props.theme.breakpoints.sm}{
        font-size: 56px;
        line-height: 32px;
        margin-bottom: 20px;
        max-width: 100%;
    }
`;

export const SectionText = styled.p`
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding-bottom: 3.6rem;
    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
    }
    
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`;

export const SectionDivider = styled.div`
    z-index:2;
    aspect-ratio: 960/300;
    width:100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(/svgs/wave-haikei.svg);
    transform: ${(props) => props.flip ? 'rotate(180deg)' : 'rotate(0)'};
    margin-bottom: -10px;
`;

export const SectionSubText = styled.p`
    max-width: 800px;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 672px;
        font-size: 16px;
        line-height: 25px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 22px;
    }
`;

export const SectionSubTitle = styled.h2`
    max-width: 800px;
    font-weight: 600;
    line-height: 48px
    font-size: 48px;
    margin-bottom:12px;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
    }
`;