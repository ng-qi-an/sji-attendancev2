import { useContext } from "react"

import { gray as lightGray } from "./colors/light/gray"
import { teal as lightTeal } from "./colors/light/teal"
import { red as lightRed } from "./colors/light/red"
import { blue as lightBlue } from "./colors/light/blue"
import { purple as lightPurple } from "./colors/light/purple"
import { green as lightGreen } from "./colors/light/green"
import { orange as lightOrange } from "./colors/light/orange"
import { yellow as lightYellow } from "./colors/light/yellow"
import { pink as lightPink } from "./colors/light/pink"

import { Color } from "./types"
import { ThemeProvider } from "../app/_layout"


export type Theme = {
    gray: Color,
    teal: Color,
    blue: Color,
    red: Color,
    purple: Color,
    green: Color,
    orange: Color,
    yellow: Color,
    pink: Color,
}

type Colors = {
    "light": Theme,
    "dark": Theme,
}


const themes: Colors = {
    "light": {
        "gray": {...lightGray},
        "teal": {...lightTeal},
        "blue": {...lightBlue},
        "red": {...lightRed},
        "purple": {...lightPurple},
        "green": {...lightGreen},
        "orange": {...lightOrange},
        "yellow": {...lightYellow},
        "pink": {...lightPink},
    },
    "dark": {
        "gray": {...lightGray},
        "teal": {...lightTeal},
        "blue": {...lightBlue},
        "red": {...lightRed},
        "purple": {...lightPurple},
        "green": {...lightGreen},
        "orange": {...lightOrange},
        "yellow": {...lightYellow},
        "pink": {...lightPink},
    }
}

Object.keys(themes).map((themeName: string, index) => {
    Object.keys(themes[themeName as keyof Colors]).map((color: string, index) => {
        const newColor = {...themes[themeName as keyof Colors][color as keyof Theme]}
        Object.keys(newColor).map((key: string, index) => {
            if (newColor[key as keyof Color]?.startsWith("--")) {
                newColor[key as keyof Color] = newColor[newColor[key as keyof Color]!.replace("--", "") as keyof Color]!
            } 
        })
        newColor.bg = newColor.background
        newColor.pri = newColor.primary
        newColor.s1 = newColor.surface1
        newColor.s2 = newColor.surface2
        newColor.s3 = newColor.surface3
        newColor.s4 = newColor.surface4
        newColor.s5 = newColor.surface5
        newColor.s6 = newColor.surface6
        newColor.t1 = newColor.text1
        newColor.t2 = newColor.text2
        themes[themeName as keyof Colors][color as keyof Theme] = newColor
    })
})


export default themes

export function useTheme(override?: keyof Colors){
    const ctx = useContext(ThemeProvider)
    return themes[override || ctx.theme as keyof Colors]
}

export function useBrand(overrideBrand?: keyof Theme, overrideTheme?: keyof Colors){
    const ctx = useContext(ThemeProvider)
    return themes[overrideTheme || ctx.theme as keyof Colors][overrideBrand || ctx.brand as keyof Theme]
}