import React, { use } from "react";
import { View, Text, ViewStyle, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, Palette } from "@/constants/theme";
import { Typography } from "@/constants/typography";

export default function Notification(){
  const theme = Colors[useColorScheme() ?? "light"];

    return (
    <View style = {{ gap: 7, borderBottomWidth: 1, borderBottomColor: theme.devider1, paddingBottom: 16 }}>
        <Text style={[Typography.Body2, { color: theme.textDark }]}>23 Aug, 19:25</Text>
        <View style = {{ gap: 7 }}>
            <Text style={[Typography.Header3, { color: theme.textDark }]}>🍏 It’s Charli, Baby!</Text>
            <Text style={[Typography.Regular, { color: theme.textDark }]}>Everything’s upside down now—fast, messy, iconic. Charli didn’t come to play, she came to serve.</Text>
        </View>
    </View>
    )
}
