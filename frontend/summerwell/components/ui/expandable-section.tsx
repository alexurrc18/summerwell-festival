import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Colors } from "@/constants/theme";
import { Typography } from "@/constants/typography";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Button from "@/components/ui/button";
import ChevronIcon from "@/assets/icons/icon_chevron-left.svg";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const ExpandableSection = ({ title, children }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const theme = Colors[useColorScheme() ?? "light"];

    return (
        <View style={{ paddingBottom: 15, marginBottom: 15, borderBottomWidth: 2, borderBottomColor: theme.devider1 }}>
            {/* Header */}
            <Pressable
                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                onPress={() => setExpanded(!expanded)}
            >
                <Text style={[Typography.Header2, { color: theme.textDark }]}>{title}</Text>

                <Button
                    variant="icon"
                    onPress={() => setExpanded(!expanded)}
                    icon={
                        <ChevronIcon
                            fill={theme.textDark}
                            width={32}
                            height={32}
                            style={{ transform: [{ rotate: expanded ? '90deg' : '-90deg' }] }}
                        />
                    }
                />
            </Pressable>


            <View style={{ width: '100%', flex: expanded ? 1 : 0, height: expanded ? 'auto' : 0, overflow: 'hidden', marginTop: expanded ? 15 : 0 }}>
                {children}
            </View>

        </View>
    );
};