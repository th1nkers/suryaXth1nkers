import React, { createContext, useState } from 'react'

export const ModalContext = createContext({
    showSuccessModal: false,
    showModalHandler: () => { },
})

export const ModalContextProvider = ({ children }) => {

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const showModalHandler = (value) => {
        setShowSuccessModal(value);
    }
    
    const ctxValue = {
        showSuccessModal,
        showModalHandler
    }

    return (
        <ModalContext.Provider value={ctxValue}>
            {children}
        </ModalContext.Provider>
    )
}