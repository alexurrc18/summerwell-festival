import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Typography } from "@/constants/typography";
import { Palette } from "@/constants/theme";

type Props = {
    buttonStyle: "auth_3rdparty" | "auth_credentials" | "icon";
    title: string;
    icon?: React.ReactNode;
    onPress?: () => void;
};

export default function Button({ buttonStyle, title, icon, onPress }: Props) {
    if (buttonStyle === "auth_3rdparty") {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{backgroundColor: Palette.blue, justifyContent: "center", alignItems: "center", borderRadius: 100, flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, gap:13}}activeOpacity={0.85}>
            {icon ? icon : null}
            <Text style={[Typography.Button, { textAlign: "center", color: Palette.white }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
    } else if (buttonStyle === "auth_credentials") {
    return (
        <TouchableOpacity
            onPress={onPress}
           style={{backgroundColor: Palette.gray, justifyContent: "center", alignItems: "center", borderRadius: 100, flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, gap:13}}activeOpacity={0.85}>
            <Text style={[Typography.Button, { textAlign: "center", color: Palette.darkBlue }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
    } else if (buttonStyle === "icon") {
    return (
        <TouchableOpacity
            onPress={onPress}
           style={{justifyContent: "center", alignItems: "center", borderRadius: 100, flexDirection: "row", padding: 8}}activeOpacity={0.85}>
            {icon ? icon : null}
        </TouchableOpacity>
    );
    } else {
        return null;
    }
}