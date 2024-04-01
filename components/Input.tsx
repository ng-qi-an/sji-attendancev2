import { Theme, useBrand, useTheme } from "@/constants/themes"
import { useState } from "react"
import { StyleProp, ViewStyle } from "react-native"
import { TextField } from "react-native-ui-lib"
import { InputProps, TextFieldProps } from "react-native-ui-lib/src/components/textField/types"

type CustomInputProps = {
    style?: StyleProp<ViewStyle>,
    variant?: "filled" | 'subtle' | "outlined"
    colorScheme?: keyof Theme,
}

type CombinedProps =  CustomInputProps & InputProps & TextFieldProps

export default function Input(props: CombinedProps={variant: 'outlined'}){
    const brand = useBrand()
    const theme = useTheme()
    return <TextField
        {...props}
        enableErrors={props.enableErrors != true ? false : true}
        fieldStyle={{ borderWidth: 1, borderColor: theme.gray.s2, borderRadius: 100, paddingVertical: 15, paddingHorizontal: 30, ...props.fieldStyle as {}}}
        validationMessageStyle={{color: theme.red.pri, textAlign: 'center', width: '100%', marginTop: 10, ...props.validationMessageStyle as {}}}
        body
    />
}