import { View, Text, Pressable, ScrollView } from "react-native";
import { Typography } from "@/constants/typography";
import { Palette } from "@/constants/theme";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ProfileScreen() {
    const theme = Colors[useColorScheme() ?? "light"];
    const insets = useSafeAreaInsets();

    const auth = useAuth();

    const [firstName, setFirstName] = useState(auth.localUserData?.firstName ?? "");
    const [lastName, setLastName] = useState(auth.localUserData?.lastName ?? "");
    const [phoneNumber, setPhoneNumber] = useState(auth.localUserData?.phoneNumber ?? "");
    const [country, setCountry] = useState(auth.localUserData?.country ?? "");
    const [city, setCity] = useState(auth.localUserData?.city ?? "");
    const [address, setAddress] = useState(auth.localUserData?.address ?? "");

    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        if(firstName != auth.localUserData?.firstName || lastName != auth.localUserData?.lastName || phoneNumber != auth.localUserData?.phoneNumber || country != auth.localUserData?.country || city != auth.localUserData?.city || address != auth.localUserData?.address) {
            setIsModified(true);
        } else {
            setIsModified(false);
        }
    }, [firstName, lastName, phoneNumber, country, city, address])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.background, padding: 16 }}>

            <View style={{ flex: 1, gap: 20, marginBottom: 20 }}>
                <View style={{ flex: 1, gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, gap: 5 }}>
                        <Text style={[Typography.Body1, { color: theme.textDesc }]}>First Name</Text>
                        <Input placeholder="First Name" style={{ height: 45 }} value={firstName} onChangeText={setFirstName} />
                    </View>
                    <View style={{ flex: 1, gap: 5 }}>
                        <Text style={[Typography.Body1, { color: theme.textDesc }]}>Last Name</Text>
                        <Input placeholder="Last Name" style={{ height: 45 }} value={lastName} onChangeText={setLastName} />
                    </View>
                </View>

                <View style={{ flex: 1, gap: 5 }}>
                    <Text style={[Typography.Body1, { color: theme.textDesc }]}>Phone Number</Text>
                    <Input placeholder="Phone Number" style={{ height: 45 }} value={phoneNumber} onChangeText={setPhoneNumber} />
                </View>

                <View style={{ flex: 1, gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, gap: 5 }}>
                        <Text style={[Typography.Body1, { color: theme.textDesc }]}>Country</Text>
                        <Input placeholder="Country" style={{ height: 45 }} value={country} onChangeText={setCountry} />
                    </View>
                    <View style={{ flex: 1, gap: 5 }}>
                        <Text style={[Typography.Body1, { color: theme.textDesc }]}>City</Text>
                        <Input placeholder="City" style={{ height: 45 }} value={city} onChangeText={setCity} />
                    </View>
                </View>

                <View style={{ flex: 1, gap: 5 }}>
                    <Text style={[Typography.Body1, { color: theme.textDesc }]}>Address</Text>
                    <Input placeholder="Address" style={{ height: 45 }} value={address} onChangeText={setAddress} />
                </View>
            </View>

            <View style={{ flex: 1, gap: 15, marginBottom: 30 }}>

                <Button variant="secondary" title="SAVE" onPress={() => {
                    auth.updateData(firstName, lastName, phoneNumber, country, city, address)
                    auth.localUserData = { firstName, lastName, phoneNumber, country, city, address }
                }} disabled={!isModified} />

                <Button variant="tertiary" title="LOG OUT" onPress={() => {
                    auth.logout()
                }} />

                <Button variant="primary" title="DELETE ACCOUNT" onPress={() => {
                    auth.deleteAccount()
                }} />

            </View>

        </ScrollView>
    )
}