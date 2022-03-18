
import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0px;
    left:0px;
    right: 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    padding: 1rem;
    padding-top: 2rem;
    z-index: 10;
    padding-right: 2rem;
    padding-left: 2rem;
    
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    }
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
    grid-area: 1 / 3 / 4 / 7;
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    };
    @media ${(props) => props.theme.breakpoints.md} {
        grid-area: 1 / 2 / 1 / 6;
    }  
`;

export const Div3 = styled.div`
  grid-area: 1 / 7 / 1 / 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 7 / 1 / 7;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.4s ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    //padding: 0.5rem;
  }
`;

export const LinkDiv = styled.div`
    position: relative;
`;

export const TabSelected = styled.div`
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.yellow};
`;