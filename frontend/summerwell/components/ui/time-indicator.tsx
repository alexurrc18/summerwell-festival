
import Svg, { Circle, Line } from "react-native-svg";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { View } from "react-native";



type Props = {
    position: number;
}

export default function TimeIndicator({ position }: Props) {
    const theme = Colors[useColorScheme() ?? "light"];


    return (
        <View style={{ position: "absolute", width: "100%", left: position-5, bottom:0, top: 0, pointerEvents: 'none' }}>
            <Svg height="100%" width="100%">
                <Circle cx={6} cy={6} r={6} fill={theme.timeIndicator} />
                <Line x1={6} y1={6}  x2={6} y2="100%" stroke={theme.timeIndicator} strokeWidth={2.5} />
            </Svg>
        </View>
    );

} 