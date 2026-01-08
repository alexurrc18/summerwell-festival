import { ScrollView } from "react-native";
import { Typography } from "@/constants/typography";
import { Palette } from "@/constants/theme";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Notification from "@/components/ui/notification";

export default function MoreScreen() {
  const theme = Colors[useColorScheme() ?? "light"];
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background, padding: 16}} contentContainerStyle={{ gap: 16 }}>

      <Notification />
    
    </ScrollView>
  );
}
