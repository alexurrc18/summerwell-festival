import { View, Text } from "react-native";
import { Typography } from "@/constants/typography";
import { Palette } from "@/constants/theme";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function LineupScreen() {
  const theme = Colors[useColorScheme() ?? "light"];

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      
      <Text style={[Typography.Body1, { color: theme.textDark }]}>More Screen</Text>
    
    </View>
  );
}
