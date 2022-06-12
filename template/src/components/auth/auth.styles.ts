import styled from "styled-components";

export const PageContainer = styled.div`
    width: 500px;
    max-width: 90%;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    margin: 10vw auto;
`;

export const ErrorContainer = styled.div`
    background-color: ${({theme}) => theme.colors.warning.emphasize};
    color: ${({theme}) => theme.colors.warning.main};
    padding: 1rem;
    border: 2px dashed ${({theme}) => theme.colors.warning.main};
    margin-bottom: 1.5rem;
`;