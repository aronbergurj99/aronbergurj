import styled from 'styled-components';

export const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.yellow};
    border-width: 3px;
    border-radius: 5px;
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

export const ProjectCard = styled.div`
    border-radius: 10px;
    text-align: center;
    margin-bottom: 40px;
    width: 400px;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`;