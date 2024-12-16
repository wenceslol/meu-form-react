function FormInput(props) {

    return(
        <div className="formInput">
            <label>{props.placeholder}: </label>
            <input  type={props.type}
                    placeholder={props.placeholder}
                    onChange={props.onChange}></input>
        </div>
    );
}

export default FormInput