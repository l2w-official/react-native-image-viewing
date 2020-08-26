import React, {ReactNode} from "react";

declare interface TextRegularProps {
    children: React.ReactNode | ReactNode[],
    level?: String,
    type?: String,
    uppercase?: Boolean,
    flex?: Boolean,
    style?: Object,
    skipDarkMode?: Boolean,
    adjustsFontSizeToFit?: Boolean,
    [x: string]: any,
}
export const TextRegular: React.FC<TextRegularProps>;

