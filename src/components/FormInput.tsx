import { FormInputProps } from "../types";
import "../styles/FormInput.css"

const FormInput = ({
    children,
    onChange,
    searchText,
    type = "text",
    id,
    handleSubmitClick
}: FormInputProps) => {

    return (
        <div className="searchBox">
            <form action="#" onSubmit={handleSubmitClick}>
                <label htmlFor={id}></label>
                <input
                    value={searchText}
                    id={id}
                    type={type}
                    onChange={onChange}
                    placeholder="Country Name"
                />
                
                <button type="submit"> Search </button>
            </form>
            {/* <a className="searchButton" href="#">
                    <i className="fas fa-search">
                    </i>
                </a> */}
        </div>
    );
};

export default FormInput;

// Submit button should be disabled if the input text is 
// empty / invalid (numbers, special characters, etc)