export function TextRegular({ children, level, type, uppercase, flex, style, skipDarkMode, adjustsFontSizeToFit, ...rest }: {
    [x: string]: any;
    children: any;
    level?: string | undefined;
    type?: string | undefined;
    uppercase?: boolean | undefined;
    flex?: boolean | undefined;
    style?: {} | undefined;
    skipDarkMode?: boolean | undefined;
    adjustsFontSizeToFit?: boolean | undefined;
}): JSX.Element;
export function TextMedium({ children, level, type, uppercase, style, skipDarkMode, ...rest }: {
    [x: string]: any;
    children: any;
    level?: string | undefined;
    type?: string | undefined;
    uppercase?: boolean | undefined;
    style?: {} | undefined;
    skipDarkMode?: boolean | undefined;
}): JSX.Element;
export function TextBold({ children, level, type, uppercase, style, skipDarkMode, ...rest }: {
    [x: string]: any;
    children: any;
    level?: string | undefined;
    type?: string | undefined;
    uppercase?: boolean | undefined;
    style?: {} | undefined;
    skipDarkMode?: boolean | undefined;
}): JSX.Element;
export function TextBlack({ children, level, type, uppercase, style, skipDarkMode, ...rest }: {
    [x: string]: any;
    children: any;
    level?: string | undefined;
    type?: string | undefined;
    uppercase?: boolean | undefined;
    style?: {} | undefined;
    skipDarkMode?: boolean | undefined;
}): JSX.Element;
export const styles: {
    white: {
        color: string;
    };
    primary: {
        color: string;
    };
    primary_default: {
        color: string;
    };
    secondary_default: {
        color: string;
    };
    secondary: {
        color: string;
    };
    tertiary_default: {
        color: string;
    };
    tertiary: {
        color: string;
    };
    default: {
        fontFamily: string;
    };
    uppercase: {
        textTransform: "uppercase";
    };
};
