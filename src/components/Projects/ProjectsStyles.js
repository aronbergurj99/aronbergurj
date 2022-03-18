import styled from 'styled-components';

export const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;

`;

export const GridContainer = styled.section`
    display: flex;
    flex-direction: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-bottom: 0;
    }
`;

export const ProjectCard = styled.a`
    border-radius: 10px;
    text-align: center;
    margin-bottom: 40px;
    width: 400px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.yellow};
    border-width: 3px;
    border-radius: 5px;
    position: relative;
    color: white;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`;

export const ProjectCardOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-width: 3px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
    z-index: 1;
    border-radius: 2px;
    cursor: pointer;
    background: linear-gradient(180deg, ${(props) => props.theme.colors.background1}a5 0%, ${(props) => props.theme.colors.background2}a5 100%);;
`;

export const ProjectCardTitleDiv = styled.div`
    position: absolute;
    top:0;
    left: 0;
    z-index: 2;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.background2};
    border-bottom-right-radius: 5px;

`;

export const ProjectCardText = styled.p`
    font-size: 20px;
    font-weight: 300;
    text-align: left;
`;