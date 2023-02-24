import React, { createContext, ReactNode, useState } from "react";
import ISettings from "../interfaces/ISettings";

type UserContextType = {
    user: ISettings | undefined,
    setUser:  React.Dispatch<React.SetStateAction<ISettings | undefined>>
}

interface Props {
    children: ReactNode
}


export const UserContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<ISettings>()

    const contextValues = React.useMemo(
        () => ({
            user,
            setUser
        }),
        [
            user,
            setUser
        ]
    )

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}