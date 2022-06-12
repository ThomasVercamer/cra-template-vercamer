import {DefaultTheme} from "styled-components";

/*
 * You can adjust this theme however you want, as long as it is in sync with the declaration file.
 * The declaration file can be found here: src\types\styled-components.d.ts
 */

export const appTheme: DefaultTheme = {
    colors: {
        primary: {
            main: "#8534A1",
            hover: "#9445B0",
            emphasize: "#C9A8D5",
        },
        info: {
            main: "#4D7CFE",
            hover: "#6A8FF6",
            emphasize: "#AEBBE0",
        },
        success: {
            main: "#6DD230",
            hover: "#7FD04E",
            emphasize: "#B6E997",
        },
        warning: {
            main: "#FF6A3C",
            hover: "#F77952",
            emphasize: "#FFDDDD",
        },
        highlight: {
            main: "#FFEF5A",
            hover: "#FAEE7D",
            emphasize: "#F6EFAD",
        },
        subtle: {
            main: "#98A9BC",
            hover: "#AFBAC7",
            emphasize: "#DADEE3",
        },
        bright: "#FFFFFF",
        contrast: "#252631",
        background: "#F8FAFB",
        outline: "#E8ECEF",
    },
    // MAKE SURE YOUR FONTS ARE ALREADY LOADED
    fonts: {
        default: {
            family: "'Open Sans', sans-serif",
            size: "14px",
        },
        code: {
            family: "'Fira Code', sans-serif",
            size: "14px",
        },
    },
    effects: {
        borderRadius: "3px",
        time: "0.3s",
    }
};