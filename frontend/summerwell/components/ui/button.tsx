import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import { Typography } from "@/constants/typography";
import { Palette, Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "banner" | "icon";

type Props = {
    variant?: ButtonVariant;
    title?: string;
    icon?: React.ReactNode;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
};

export default function Button({ 
    variant = "primary", 
    title, 
    icon, 
    onPress, 
    disabled = false,
    style 
}: Props) {
    const theme = Colors[useColorScheme() ?? "light"];

    const getVariantStyles = (): { container: ViewStyle; text: string } => {
        switch (variant) {
            case "primary":
                return {
                    container: { backgroundColor: theme.primary, paddingVertical: 12, paddingHorizontal: 30 },
                    text: theme.buttonTextLight,
                };
            case "secondary":
                return {
                    container: { backgroundColor: theme.secondary, paddingVertical: 12, paddingHorizontal: 30 },
                    text: theme.buttonTextLight,
                };
            case "tertiary":
                return {
                    container: { backgroundColor: theme.tertiary, paddingVertical: 12, paddingHorizontal: 16 },
                    text: theme.buttonTextDark,
                };
            case "icon":
                return {
                    container: { backgroundColor: "transparent", padding: 0, width: "auto" },
                    text: "",
                };
            case "banner":
                return {
                    container: { backgroundColor: theme.secondary, paddingVertical: 15, paddingHorizontal: 20, borderRadius: 0 },
                    text: theme.buttonTextLight,
                };
            default:
                return {
                    container: { backgroundColor: theme.secondary },
                    text: theme.buttonTextLight,
                };
        }
    };

    const { container, text: textColor } = getVariantStyles();

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.85}
            style={[
                {
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 13,
                    opacity: disabled ? 0.5 : 1,
                },
                container,
                style,
            ]}
        >
            {icon && icon}
            {variant !== "icon" && title && (
                <Text style={[Typography.Button, { textAlign: "center", color: textColor }]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}