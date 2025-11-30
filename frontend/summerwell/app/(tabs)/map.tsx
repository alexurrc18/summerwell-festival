import { View, Text } from "react-native";
import { Typography } from "@/constants/typography";
import { Palette } from "@/constants/theme";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Map from "@/components/map";

export default function MapScreen() {
  const theme = Colors[useColorScheme() ?? "light"];

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>

      <Map/>
    
    </View>
  );
}
