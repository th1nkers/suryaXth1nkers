import React from 'react'

export const Input = ({ label, id, error, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            {/* <div>{error && <p>{error}</p>}</div> */}
        </>
    )
}

export const TextArea = ({ label, id, error, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...props} />
            {/* <div>{error && <p>{error}</p>}</div> */}
        </>
    )
}


