import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
`;

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 4rem;
    //grid-template-row: repeat(10, minmax(0, 1fr));
`;
export const RowTextDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-column-start: 1;
        grid-column-end: 4;
    }
`;

export const BarContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 10;
    height: 2.5rem;
    //width: 100%;
    background-color: white;
    border-radius: 50px;
    border-width: 3px;
    border-style: solid;
//    background-color: ${(props) => props.theme.colors.background1};
    margin-bottom: 40px;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-column-start: 4;
        grid-column-end: 10;
    }
`;

export const Bar = styled.div`
    height: 100%;
    border-radius: 50px;
    width: ${(props) => props.fill};
    background-color: ${(props) => props.theme.colors.yellow}
`



