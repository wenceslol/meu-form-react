import {useState} from 'react'


function FormInput(props) {

    const [focused, setFocused] = useState(false);
    const{value, label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return(
        <>
            <div className="formLabel">
                <label>{label}: </label>
            </div>
            <div className="formInput">
                <input  {...inputProps}
                        onChange={onChange}
                        onBlur={handleFocus}
                        onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)}
                        focused={focused.toString()}>
                </input>
                <span>{errorMessage}</span>
            </div>
        </>
    );
}

export default FormInput