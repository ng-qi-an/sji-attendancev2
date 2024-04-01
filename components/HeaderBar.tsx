import { useBrand, useTheme } from "@/constants/themes";
import { DMSans, DMSansMedium, Raleway, safeArea } from "@/constants/types";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Touchable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native-ui-lib";

type HeaderBarProps = {
    title?: string,
}

export default function HeaderBar(props: HeaderBarProps){
    const theme = useTheme()
    const brand = useBrand()
    const router = useRouter()
    const insets = useSafeAreaInsets();
    return <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20, paddingTop: 30, paddingHorizontal: 40}}>
        <Text {...Raleway} color={brand.text2} h1>{props.title}</Text>
        <TouchableOpacity onPress={()=> console.log('hi')} style={{padding: 0}}>
            <Image width={45} height={45} assetName="avatarMale" assetGroup="avatars"/>
        </TouchableOpacity>
    </View>
}