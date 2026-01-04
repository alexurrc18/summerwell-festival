import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { Colors, Palette } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Typography } from "@/constants/typography";

import BackIcon from "@/assets/icons/icon_chevron-left.svg";
import CartIcon from "@/assets/icons/icon_cart.svg";
import Button from "@/components/ui/button";

export default function WalletLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const theme = Colors[colorScheme ?? "light"];

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "My Wallet",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.header, height: 55 + insets.top },
          headerTitleStyle: { fontFamily: Typography.Header2.fontFamily, fontSize: Typography.Header2.fontSize, color: Palette.white },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeftContainerStyle: { paddingLeft: 16 },

        }}
      />

      <Stack.Screen
        name="tickets"
        options={{
          headerTitle: "Tickets",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.subheader, height: 55 + insets.top },
          headerTitleStyle: { fontFamily: Typography.Header2.fontFamily, fontSize: Typography.Header2.fontSize, color: Palette.white },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeftContainerStyle: { paddingLeft: 16 },

          headerLeft: () => (
            <Button buttonStyle="icon" icon={<BackIcon width={30} height={30} fill={Palette.white} />} onPress={() => router.back()} />
          ),

          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <Button buttonStyle="icon" icon={<CartIcon width={30} height={30} fill={Palette.white} />} onPress={() => router.push("/(tabs)/wallet/cart")} />
              <Text style={[Typography.Header3, { color: Palette.white }]}>2</Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="cart"
        options={{
          headerTitle: "Cart",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.subheader, height: 55 + insets.top },
          headerTitleStyle: { fontFamily: Typography.Header2.fontFamily, fontSize: Typography.Header2.fontSize, color: Palette.white },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeftContainerStyle: { paddingLeft: 16 },

          headerLeft: () => (
            <Button buttonStyle="icon" icon={<BackIcon width={30} height={30} fill={Palette.white} />} onPress={() => router.back()} />
          )
        }}
      />

      <Stack.Screen
        name="checkout"
        options={{
          headerTitle: "Checkout",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.subheader, height: 55 + insets.top },
          headerTitleStyle: { fontFamily: Typography.Header2.fontFamily, fontSize: Typography.Header2.fontSize, color: Palette.white },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeftContainerStyle: { paddingLeft: 16 },

          headerLeft: () => (
            <Button buttonStyle="icon" icon={<BackIcon width={30} height={30} fill={Palette.white} />} onPress={() => router.back()} />
          )
        }}
      />


      <Stack.Screen
        name="wristband"
        options={{
          headerTitle: "Add Wristband",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.subheader, height: 55 + insets.top },
          headerTitleStyle: { fontFamily: Typography.Header2.fontFamily, fontSize: Typography.Header2.fontSize, color: Palette.white },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeftContainerStyle: { paddingLeft: 16 },

          headerLeft: () => (
            <Button buttonStyle="icon" icon={<BackIcon width={30} height={30} fill={Palette.white} />} onPress={() => router.back()} />
          )
        }}
      />

    </Stack>
  );
}