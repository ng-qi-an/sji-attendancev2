import { Link, Stack, useRouter } from "expo-router";
import themes, { useBrand, useTheme } from "../../constants/themes";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "../_layout";
import { DMSans, DMSansMedium, Raleway, safeArea } from "../../constants/types";
import { AtSign, Lock, MoveRight } from 'lucide-react-native';
import Animated from 'react-native-reanimated';
import { Image, Text, TextField, View, MaskedInput, TouchableOpacity} from "react-native-ui-lib";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TopBar from "@/components/TopBar";
import { Keyboard, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Forgot(){
    const [inputSelected, setInputSelected] = useState(false)
    const theme = useTheme()
    const brand = useBrand()
    const router = useRouter()
    const ctx = useContext(ThemeProvider)
    useEffect(()=>{
        ctx.setBrand("teal")
    }, [])
    return <>
        <TopBar back title="Forgot Password" />
        <KeyboardAwareScrollView  contentContainerStyle={{height: '100%', display: 'flex', flexDirection:  'column', alignItems: 'center', ...safeArea(), paddingTop: 0}}>
                <Stack.Screen options={{headerShown: false}}/>
                <Image width={255} height={169} assetName="forgot_password" assetGroup="auth" style={{marginTop: 40}}/>
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 30, width: '100%'}}>
                    <Text {...Raleway} h1 marginT-20 color={brand.text2}>Reset Password</Text>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 40, paddingHorizontal: 10}}>
                        <Text {...DMSans} color={brand.text2} body>Email</Text>
                        <View flex/>
                        <AtSign size={25} color={brand.text2} />
                    </View>
                    <Input
                        keyboardType={"email-address"}
                        validateOnChange
                        textContentType="emailAddress"
                        validate={['required', 'email']}
                        validationMessage={['Field is required', 'Email is invalid']}
                        onFocus={()=> setInputSelected(true)}
                    />
                </View>
                <View flex/>
                <Button onPress={()=>{
                    router.replace("/students/")
                }} variant="filled" style={{alignSelf: 'center', paddingVertical: 15, paddingHorizontal: 50}}>
                    <Text body color="white">Continue</Text>
                    <MoveRight style={{marginLeft: 10}} color={'white'}/>
                </Button>
        </KeyboardAwareScrollView>
    </>
}