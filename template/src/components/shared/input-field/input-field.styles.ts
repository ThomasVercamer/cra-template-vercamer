import styled from "styled-components";

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .35rem;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 2rem;
`;

export const FieldLabel = styled.label`
    font-weight: bold;
    cursor: pointer;
    font-size: .75rem;
    text-transform: uppercase;
`;

export const FieldElement = styled.input`
    width: 100%;
    border-radius: ${({theme}) => theme.effects.borderRadius};
    border: 1px solid ${({theme}) => theme.colors.outline};
    padding: 0.5rem 0.75rem;
    font-family: ${({theme}) => theme.fonts.default.family};
    font-family: ${({theme}) => theme.fonts.default.size};
    
    &:focus {
        border-color: ${({theme}) => theme.colors.contrast};
         outline: ${({theme}) => theme.colors.contrast};
    }
`;