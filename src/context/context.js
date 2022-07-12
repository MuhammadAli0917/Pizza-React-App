import {createContext, useState} from "react";

export const Pizza = createContext()

export const PizzaProvider = ({children}) => {
    const [data, setData] = useState("Hello")

    return(
        <Pizza.Provider value={[data, setData]}>
            {children}
        </Pizza.Provider>
    )
}