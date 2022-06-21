import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.background};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "navigation topbar"
        "navigation main";
    
    main {
        grid-area: main;
        padding: 1rem;
        box-shadow: inset 10px 10px 20px -8px ${({theme}) => theme.colors.outline};
    }
`;