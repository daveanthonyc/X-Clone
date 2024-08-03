import { createContext, ReactNode, useState } from "react"

export const CountContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>] | null>(null);

function CountProvider({children} : {children: ReactNode}) {
    const [count, setCount] = useState<number>(0);

    return (
        <CountContext.Provider value={[count, setCount]}>
            {children} 
        </CountContext.Provider>
    )
}

export default CountProvider;
