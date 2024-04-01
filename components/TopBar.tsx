import { useTheme } from "@/constants/themes";
import { DMSans, DMSansMedium, safeArea } from "@/constants/types";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";

type TopbarProps = {
    back?: boolean,
    title?: string,
    actions?: React.ReactNode,
}

export default function TopBar(props: TopbarProps){
    const theme = useTheme()
    const router = useRouter()
    const insets = useSafeAreaInsets();
    return <View style={{position: 'relative',  backgroundColor: theme.gray.background}}>
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20, paddingTop: insets.top, paddingHorizontal: 30, height: 100}}>
        {props.back && <TouchableOpacity onPress={()=> router.back()}>
                <ChevronLeft size={30} color={theme.gray.text2}/>
            </TouchableOpacity>}
        </View>
        <View style={{position: 'absolute', top: insets.top + 2.5, left: 0, width: '100%', zIndex: -1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text {...DMSansMedium} small>{props.title}</Text>
        </View>
    </View>
}