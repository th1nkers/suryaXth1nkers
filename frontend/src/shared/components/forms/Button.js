import React from 'react';
import "./Button.css";

export default function Button({ children,...props }) {
    return (
        <button {...props} className="button-30" role="button">
            {children}
        </button>
    )
}
