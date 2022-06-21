import styled from "styled-components";

export const NavigationContainer = styled.nav`
    grid-area: navigation;
    background-color: ${({theme}) => theme.colors.bright};
    border-right: 2px solid ${({theme}) => theme.colors.outline};
    padding-top: 1rem;
`;