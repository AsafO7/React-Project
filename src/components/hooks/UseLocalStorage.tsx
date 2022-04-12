import { useEffect, useState } from "react"


export const UseLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        // we have a value, so return it.
        if(jsonValue !== null) return JSON.parse(jsonValue)
        if(typeof jsonValue === "function") return defaultValue()
        else return defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}