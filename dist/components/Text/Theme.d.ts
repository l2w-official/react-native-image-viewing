export default theme;
declare const theme: {
    colors: {
        primary: string;
        accent: string;
        error: string;
        background: string;
        surface: string;
        text: string;
        onSurface: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
    };
    button: {
        primary: string;
    };
    fontFamily: string;
    fonts: import("react-native-paper/lib/typescript/types").Fonts;
    dark: boolean;
    mode?: "adaptive" | "exact" | undefined;
    roundness: number;
    animation: {
        scale: number;
    };
};
