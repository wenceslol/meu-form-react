function FormInput(props) {


    return(
        <>
            <div className="formLabel">
                <label>{props.placeholder}: </label>
            </div>
            <div className="formInput">
                <input  type={props.type}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                        required>
                </input>
            </div>
        </>
    );
}

export default FormInput