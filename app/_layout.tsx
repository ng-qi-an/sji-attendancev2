import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useState } from 'react';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import { DMSans_500Medium, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { useColorScheme } from 'react-native';
import { Assets, Typography, View } from 'react-native-ui-lib';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(auth)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

type ThemeContextType = {
  theme: string | null,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  brand: string | null,
  setBrand: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeProvider = createContext<ThemeContextType>({theme: "", setTheme: ()=>{}, brand: "", setBrand: ()=>{}})

  

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
    RalewayBold: Raleway_700Bold,
    DMSans: DMSans_400Regular,
    DMSansMedium: DMSans_500Medium,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav/>
}

function RootLayoutNav(){
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState("light")
  const [brand, setBrand] = useState("gray")
  
  Assets.loadAssetsGroup("avatars", {
    avatarMale: require('../assets/images/avatars/avatarMale.png')
  })

  Assets.loadAssetsGroup("illustrations", {
    attendance: require('../assets/images/illustrations/attendance.png'),
    discussion: require('../assets/images/illustrations/discussion.png'),
    lecture: require('../assets/images/illustrations/lecture.png'),
    remedial: require('../assets/images/illustrations/remedial.png'),
    sports: require('../assets/images/illustrations/sports.png'),
    trackAndField: require('../assets/images/illustrations/trackAndField.png'),
    videoCall: require('../assets/images/illustrations/videoCall.png'),

  })

  Assets.loadAssetsGroup('auth', {
    welcome: require('../assets/images/auth/welcome.png'),
    forgot_password: require('../assets/images/auth/forgot_password.png'),
  });

  Typography.loadTypographies({
    h1: {fontSize: 36},
    h2: {fontSize: 30},
    h3: {fontSize: 25},
    body: {fontSize: 20},
    small: {fontSize: 17}
  });

  const LightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  const GrayTheme = {
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#000",
    },
  };

  useEffect(()=>{
    if (colorScheme == 'dark'){
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [colorScheme])

  return <NavigationThemeProvider value={colorScheme === 'dark' ? GrayTheme : LightTheme}>
  <ThemeProvider.Provider value={{theme, setTheme, brand, setBrand}}>
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown: false}}>
        {/*<Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
      </Stack>
    </SafeAreaProvider>
  </ThemeProvider.Provider>
</NavigationThemeProvider>
}