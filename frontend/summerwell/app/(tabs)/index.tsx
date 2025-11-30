import React, { useEffect } from "react";
import { View, Image, Text, ScrollView, AppState } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useVideoPlayer, VideoView } from "expo-video";


import { Typography } from "@/constants/typography";
import { Palette } from "@/constants/theme";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";



export default function HomeScreen() {
  const theme = Colors[useColorScheme() ?? "light"];
  const insets = useSafeAreaInsets();

  const player = useVideoPlayer(require("@/assets/videos/bg_video.mp4"), (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  useEffect(() => {
    const sub = AppState.addEventListener("change", (state: string) => {
      if (state === "active") {
        player.play();
      }
    });

    return () => sub.remove();
  }, [player]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>

      {/* Hero */}
      <View style={{ height: 375, width: "100%", marginBottom: 16 }}>
        <VideoView
          player={player}
          style={{ position: "absolute", top: 0, left: 0, right: 0, height: 375 }}
          contentFit="cover"
          nativeControls={false}
        />

        <View
          style={{
            flex: 1, paddingTop: insets.top, justifyContent: "center", alignItems: "center",
          }}>

          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 173, height: 173, resizeMode: "contain", marginBottom: 15}}
          />

          <Text style={[Typography.Body1, { color: Palette.white }]}>See you at Summer Well 2026 in about:</Text>
          <Text style={[Typography.Header1, { color: Palette.yellow, shadowColor: Palette.black, overflow: "visible", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 20 }]}>256:45:43:29</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
          <Text style={[Typography.Header2, { color: theme.textDark, marginLeft: 16}]}>Meet our artists:</Text>
      </View>
    </ScrollView>
  );
}