import { FormInputProps } from "../types";
import "../styles/FormInput.css"

const FormInput = ({
    // children,
    onChange,
    searchText,
    type = "text",
    id,
    handleSubmitClick,
    searchRequired
}: FormInputProps) => {

    return (
        <div className="searchBox">
            <form action="#" onSubmit={handleSubmitClick}>
                <label htmlFor={id}></label>
                <input
                    pattern="[A-Za-z]+"
                    title="Enter only alphabets"
                    value={searchText}
                    id={id}
                    type={type}
                    onChange={onChange}
                    placeholder="Country Name"
                />

                <button type="submit"> Search </button>
            </form>
        </div>
    );
};

export default FormInput;

// Submit button should be disabled if the input text is
// empty / invalid (numbers, special characters, etc)