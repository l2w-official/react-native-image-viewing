import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors, { isDark } from './Colors';
import theme from './Theme';
import Fonts from './Fonts';
import StylesHelper from './helpers';

export const TextRegular = ({
    children,
    level = 't2',
    type = 'primary',
    uppercase = false,
    flex = false,
    style = {},
    skipDarkMode = false,
    adjustsFontSizeToFit = true,
    ...rest
}) => (
    <Text
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        style={[
            uppercase && styles.uppercase,
            flex && StylesHelper.fill,
            styles.default,
            styles[type],
            skipDarkMode && styles[`${type}_default`],
            Fonts[level],
            Fonts.regular,
            style,
        ]}
        {...rest}>
        {children}
    </Text>
);

export const TextMedium = ({
    children,
    level = 't2',
    type = 'primary',
    uppercase = false,
    style = {},
    skipDarkMode = false,
    ...rest
}) => (
    <Text
        adjustsFontSizeToFit
        style={[
            uppercase && styles.uppercase,
            styles.default,
            styles[type],
            skipDarkMode && styles[`${type}_default`],
            Fonts[level],
            Fonts.medium,
            style,
        ]}
        {...rest}>
        {children}
    </Text>
);

export const TextBold = ({
    children,
    level = 't2',
    type = 'primary',
    uppercase = false,
    style = {},
    skipDarkMode = false,
    ...rest
}) => (
    <Text
        adjustsFontSizeToFit
        style={[
            uppercase && styles.uppercase,
            styles[type],
            skipDarkMode && styles[`${type}_default`],
            Fonts[level],
            Fonts.black,
            styles.default,
            style,
        ]}
        {...rest}>
        {children}
    </Text>
);

export const TextBlack = ({
    children,
    level = 't2',
    type = 'primary',
    uppercase = false,
    style = {},
    skipDarkMode = false,
    ...rest
}) => (
    <Text
        adjustsFontSizeToFit
        style={[
            uppercase && styles.uppercase,
            styles[type],
            skipDarkMode && styles[`${type}_default`],
            Fonts[level],
            Fonts.bold,
            styles.default,
            style,
        ]}
        {...rest}>
        {children}
    </Text>
);

export const styles = StyleSheet.create({
    white: {
        color: Colors.white,
    },
    primary: {
        color: isDark ? Colors.textDarkPrimary : Colors.textPrimary,
    },
    primary_default: {
        color: Colors.textPrimary,
    },
    secondary_default: {
        color: Colors.textSecondary,
    },
    secondary: {
        color: isDark ? Colors.textDarkSecondary : Colors.textSecondary,
    },
    tertiary_default: {
        color: Colors.textTertiary,
    },
    tertiary: {
        color: isDark ? Colors.textDarkTertiary : Colors.textTertiary,
    },
    default: {
        fontFamily: theme.fontFamily,
    },
    uppercase: {
        textTransform: 'uppercase',
    },
});
