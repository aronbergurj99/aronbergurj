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
    margin-top: 50px;
    position: relative;
`;
export const RowTextDiv = styled.div`

    @media ${(props) => props.theme.breakpoints.sm} {

        
    }
`;

export const BarContainer = styled.div`
    height: 2.5rem;
    width: 100%;
    background-color: white;
    border-radius: 50px;
    border-width: 3px;
    border-style: solid;
    margin-bottom: 40px;
    @media ${(props) => props.theme.breakpoints.sm} {
    }
`;

export const Bar = styled.div`

    position: relative;
    height: 100%;
    border-radius: 50px;
    width: ${(props) => props.fill};
    background-color: ${(props) => props.theme.colors.yellow}
`;
export const PercentageDiv = styled.div`
    position: absolute;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.background1};
    border-radius: 5px;
    right: -20px;
    top: -55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Triangle = styled.div`
    position: absolute;
    height: 10px;
    width: 10px;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    background-color: ${(props) => props.theme.colors.background1};
    border-radius: 2px;

`;