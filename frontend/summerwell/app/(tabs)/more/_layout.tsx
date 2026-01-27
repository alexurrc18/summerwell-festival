import React from "react";
import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { Colors, Palette } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Typography } from "@/constants/typography";

import BackIcon from "@/assets/icons/icon_chevron-left.svg";
import CartIcon from "@/assets/icons/icon_cart.svg";

import Button from "@/components/ui/button";
import Header from "@/components/ui/header";
import { useAuth } from "@/context/AuthContext";

export default function WalletLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const theme = Colors[colorScheme ?? "light"];
  const { token } = useAuth();

  return (
    <Stack>
      
      {/* INDEX  */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          header: () => (
            <Header title="Profile" backgroundColor={theme.subheader}
              left={
                <Button variant="icon" icon={<BackIcon width={30} height={30} fill={Palette.white} />} onPress={() => router.back()} />}
            />
          ),
        }}
      />

    </Stack>
  );
}