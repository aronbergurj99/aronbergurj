import styled from 'styled-components';

export const EducationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr;
    grid-column-gap: 8rem;
    grid-row-gap: 1rem;
    margin-top: 50px;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
      }
`;

export const Div1 = styled.div`
    display: flex;
    align-items: flex-end;
    justify-contents: flex-end;
    @media ${(props) => props.theme.breakpoints.sm} {
        align-items: flex-start;
    }
`;

export const Div2 = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media ${(props) => props.theme.breakpoints.sm} {
        justify-content: flex-start;
        align-items: flex-start;

    }
`;

export const Heading1 = styled.h3`
    font-weight: 400;
    font-size: 28px;
    text-align: right;
    line-height: 28px;
`;

export const Text1 = styled.h3`
    font-weight: 400;
    font-size: 20px;
`;