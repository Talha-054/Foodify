import { useState, createContext } from "react";


export const ModalContext = createContext(false);


export default function ModelContextProvider ({children}){
    const [modalStatus, setModalStatus] = useState(false);

    return (
        <ModalContext.Provider value={[modalStatus, setModalStatus]}>
            {children}
        </ModalContext.Provider>
    )

}
