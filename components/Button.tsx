import { Theme, useBrand, useTheme } from "@/constants/themes"
import { useState } from "react"
import { StyleProp, ViewStyle } from "react-native"
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native-ui-lib"

type ButtonProps = {
    style?: StyleProp<ViewStyle>,
    variant?: "filled" | 'subtle' | "outlined"
    colorScheme?: keyof Theme,
}

type CombinedProps =  ButtonProps & TouchableOpacityProps

export default function Button(props: CombinedProps={variant: 'outlined'}){
    const brand = useBrand()
    const theme = useTheme()
    return <TouchableOpacity  {...props} style={{paddingVertical: 15, paddingHorizontal: 30, borderRadius: 100, backgroundColor: props.variant == 'outlined' ? 'transparent' : props.variant == 'filled' ? brand.pri : brand.surface1, borderWidth: props.variant == 'outlined' ? 1 : 0, borderColor: theme.gray.surface2, ...props.style as {}}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {props.children}
        </View>
    </TouchableOpacity>
}