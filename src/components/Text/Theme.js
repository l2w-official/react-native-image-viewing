import { DefaultTheme, configureFonts } from 'react-native-paper';
import Fonts from './Fonts';
import Colors from './Colors';
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
        error: Colors.primary,
    },
    button: {
        primary: 'red',
    },
    fontFamily: Fonts.fontFamily,
    fonts: configureFonts(Fonts),
};

export default theme;
