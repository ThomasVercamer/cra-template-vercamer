import "styled-components";

interface IColorOptions {
    main: string;
    hover: string;
    emphasize: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: IColorOptions;
            info: IColorOptions;
            success: IColorOptions;
            warning: IColorOptions;
            highlight: IColorOptions;
            subtle: IColorOptions;
            bright: string;
            contrast: string;
            outline: string;
            background: string;
        };
        fonts: {
            default: {
                family: string;
                size: string;
            };
            code: {
                family: string;
                size: string;
            };
        };
        effects: {
            borderRadius: string;
            time: string;
        }
    }
}