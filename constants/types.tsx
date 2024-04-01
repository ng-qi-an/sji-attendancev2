import { StyleProp, ViewStyle } from "react-native"
import { AnimatedProps } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type Color = {
    background: string,
    bg?: string,
    primary: string,
    pri?: string,
    /* SURFACES */
    surface1: string,
    s1?: string,
    surface2: string,
    s2?: string,
    surface3: string,
    s3?: string,
    surface4: string,
    s4?: string,
    surface5: string,
    s5?: string,
    surface6: string,
    s6?: string,
    /* TEXT SHADES */
    text1: string,
    t1?: string,
    text2: string,
    t2?: string,
}



export function safeArea(){
    const insets = useSafeAreaInsets();
    return {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }
}



export const Raleway = {
    style: {fontFamily: "RalewayBold"}
}

export const Inter = {
    style: {fontFamily: "Inter"}
}

export const InterMedium = {
    style: {fontFamily: "InterMedium"}
}

export const InterSemiBold = {
    style: {fontFamily: "InterSemiBold"}
}

export const DMSans = {
    style: {fontFamily: "DMSans"}
}

export const DMSansMedium = {
    style: {fontFamily: "DMSansMedium"}
}