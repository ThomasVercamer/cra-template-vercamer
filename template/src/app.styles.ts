import styled, {createGlobalStyle} from "styled-components";
import reset from "styled-reset-advanced";

export const GlobalReset = createGlobalStyle`
    ${reset};
`;

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.default.family};
    font-size: ${({theme}) => theme.fonts.default.size};
    color: ${({theme}) => theme.colors.contrast};
`;