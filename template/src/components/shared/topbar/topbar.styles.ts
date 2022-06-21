import styled from "styled-components";

export const TopbarContainer = styled.div`
    grid-area: topbar;
    background-color: ${({theme}) => theme.colors.bright};
    border-bottom: 1px solid ${({theme}) => theme.colors.outline};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;