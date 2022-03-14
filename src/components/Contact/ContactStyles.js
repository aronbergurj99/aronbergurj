import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 20px;
    padding: 20px;
    border-radius: 40px;
    background-color: ${(props) => props.theme.colors.background2};
    border-width: 3px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.yellow};
    width: fit-content;
    `;