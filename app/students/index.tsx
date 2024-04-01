import { ScrollView } from "react-native";
import { Image, Text, View } from "react-native-ui-lib";
import { DMSans, DMSansMedium, Inter, InterMedium, InterSemiBold, Raleway, safeArea } from "@/constants/types";
import HeaderBar from "@/components/HeaderBar";
import { useBrand, useTheme } from "@/constants/themes";
import Button from "@/components/Button";
import { Ellipsis, LogIn } from "lucide-react-native";

export default function Students(){
    const theme = useTheme()
    const brand = useBrand()
    return <View style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems:"center", backgroundColor: brand.bg, ...safeArea()}}>
        <HeaderBar title="Home"/>
        <View style={{paddingHorizontal: 30, marginTop: 10, width: '100%'}}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: brand.pri, width: '100%', height: 220, borderRadius: 20}}>
                <Image width={250} height={150} assetName="attendance" assetGroup="illustrations"/>
            </View>
        </View>
        <Text {...DMSansMedium} h2 marginT-20>Morning Assembly</Text>
        <Text {...Inter} body>SJI Track</Text>
        <View flex-1/>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                <Text {...InterMedium} small color={theme.gray.s6}>Report</Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 40, fontFamily: "InterMedium"}} color={brand.t1}>7.30</Text> 
                    <Text body style={{paddingBottom: 7, paddingLeft: -2}} color={theme.gray.s6}>am</Text>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, justifyContent: 'center'}}>
                <Text {...InterMedium} small color={theme.gray.s6}>Grace</Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 40, fontFamily: "InterMedium"}} color={brand.t1}>15</Text> 
                    <Text body style={{paddingBottom: 7, paddingLeft: -2}} color={theme.gray.s6}>min</Text>
                </View>
            </View>
        </View>
        <View flex-1/>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Button variant="filled" style={{paddingVertical: 0, paddingHorizontal: 0, height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}><LogIn size={40} color={'white'}/></Button>
                <Text small style={{marginTop: 7, fontFamily: "InterMedium"}} color={theme.gray.s6}>Check-In</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 40, justifyContent: 'center'}}>
                <Button variant="subtle" style={{paddingVertical: 0, paddingHorizontal: 0, height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}><Ellipsis size={40} color={'black'}/></Button>
                <Text small style={{marginTop: 7, fontFamily: "InterMedium"}} color={theme.gray.s6}>More</Text>
            </View>
        </View>
        <View flex-1/>
        <Button><Text small {...DMSansMedium}>View future classes</Text></Button>
    </View> 
}