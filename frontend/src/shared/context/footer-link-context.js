import React, { createContext, useState } from 'react'

export const FooterContext = createContext({
    isHome: true,
    isNoFooterLinks: true,
    toggleHomeLink: () => { },
    noFooterLink: () => { },
})

export const FooterContextProvider = ({ children }) => {

    const [isHome, setIsHome] = useState(true);
    const [isNoFooterLinks, setIsNoFooterLink] = useState(false);

    const toggleHomeLink = (value) => {
        setIsHome(value);
    }

    const noFooterLink = (value) => {
        setIsNoFooterLink(value);
    }


    const ctxValue = {
        isHome,
        isNoFooterLinks,
        toggleHomeLink,
        noFooterLink,
    }

    return (
        <FooterContext.Provider value={ctxValue}>
            {children}
        </FooterContext.Provider>
    )
}