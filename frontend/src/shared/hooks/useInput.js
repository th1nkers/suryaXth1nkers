import { useState } from 'react';

export function useInput(defaultValue, validationFn) {

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    const inputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
        setDidEdit(false);
    };

    const inputBlurHandler = () => {
        setDidEdit(true);
    };

    return {
        value: enteredValue,
        inputChangeHandler,
        inputBlurHandler,
        hasError: didEdit && !valueIsValid && (enteredValue !== "")
    }
}
