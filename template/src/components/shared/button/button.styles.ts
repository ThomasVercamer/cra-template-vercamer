import styled, {DefaultTheme} from "styled-components";

export const ButtonContainer = styled.div<{
    align: "left" | "center" | "right";
}>`
    align-items: center;
    display: flex;
    justify-content: ${({align}) => align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"};
`;

interface IButtonElement {
    outline: boolean;
    variant: "primary" | "success" | "info" | "warning" | "highlight" | "subtle";
}

export const ButtonElement = styled.button<IButtonElement>`
    background-color: ${({theme, variant, outline}) => getButtonStyle(outline, variant, theme).background};
    color: ${({theme, variant, outline}) => getButtonStyle(outline, variant, theme).color};
    height: 26px;
    min-width: 50px;
    padding: 0 1rem;
    cursor: pointer;
    border: 1px solid ${({theme, variant, outline}) => getButtonStyle(outline, variant, theme).border};
    border-radius: ${({theme}) => theme.effects.borderRadius};
    transition: all .3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 1rem;
    
    svg {
        height: 12px;
    }
    
    &:hover{
        background-color: ${({theme, variant, outline}) => getButtonHoverStyle(outline, variant, theme).background};
        border-color: ${({theme, variant, outline}) => getButtonHoverStyle(outline, variant, theme).border};
        color: ${({theme, variant, outline}) => getButtonHoverStyle(outline, variant, theme).color};
    }
    
    &:disabled {
        background-color: ${({theme, outline}) => outline ? "transparent" : theme.colors.outline};
        border-color: ${({theme, outline}) => outline ? theme.colors.outline : "transparent"};
        color: ${({theme, outline}) => outline ? theme.colors.outline : theme.colors.bright};
        cursor: not-allowed;
        
        &:hover {
            background-color: ${({theme, outline}) => outline ? "transparent" : theme.colors.outline};
        }
    }
`;

function getButtonStyle(outline: boolean, variant: string, theme: DefaultTheme){
    switch(variant){
        case "success":
            return {
                background: outline ? "transparent" : theme.colors.success.main,
                border: theme.colors.success.main,
                color: outline ? theme.colors.success.main : theme.colors.bright,
            };
        case "info":
            return {
                background: outline ? "transparent" : theme.colors.info.main,
                border: theme.colors.info.main,
                color: outline ? theme.colors.info.main : theme.colors.bright,
            };
        case "warning":
            return {
                background: outline ? "transparent" : theme.colors.warning.main,
                border: theme.colors.warning.main,
                color: outline ? theme.colors.warning.main : theme.colors.bright,
            };
        case "highlight":
            return {
                background: outline ? "transparent" : theme.colors.highlight.main,
                border: theme.colors.highlight.main,
                color: outline ? theme.colors.highlight.main : theme.colors.bright,
            };
        case "subtle":
            return {
                background: outline ? "transparent" : theme.colors.subtle.main,
                border: theme.colors.subtle.main,
                color: outline ? theme.colors.subtle.main : theme.colors.bright,
            };
        default:
            return {
                background: outline ? "transparent" : theme.colors.primary.main,
                border: theme.colors.primary.main,
                color: outline ? theme.colors.primary.main : theme.colors.bright,
            };
    }
}

function getButtonHoverStyle(outline: boolean, variant: string, theme: DefaultTheme){
    switch(variant){
        case "success":
            return {
                background: theme.colors.success.hover,
                border: theme.colors.success.hover,
                color: theme.colors.bright,
            };
        case "info":
            return {
                background: theme.colors.info.hover,
                border: theme.colors.info.hover,
                color: theme.colors.bright,
            };
        case "warning":
            return {
                background: theme.colors.warning.hover,
                border: theme.colors.warning.hover,
                color: theme.colors.bright,
            };
        case "highlight":
            return {
                background: theme.colors.highlight.hover,
                border: theme.colors.highlight.hover,
                color: theme.colors.bright,
            };
        case "subtle":
            return {
                background: theme.colors.subtle.hover,
                border: theme.colors.subtle.hover,
                color: theme.colors.bright,
            };
        default:
            return {
                background: theme.colors.primary.hover,
                border: theme.colors.primary.hover,
                color: theme.colors.bright,
            };
    }
}