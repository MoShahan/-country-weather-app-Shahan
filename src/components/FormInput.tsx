import { FormInputProps } from "../types";
import "../styles/FormInput.css"

const FormInput = ({
    children,
    onChange,
    searchText,
    type = "text",
    id
}: FormInputProps) => {

    return (
        <div className="searchBox">
                <label htmlFor={id}>{children}</label>
                <input
                    value={searchText}
                    id={id}
                    type={type}
                    onChange={onChange}
                    placeholder="Type here to Search"
                />
                {/* <a className="searchButton" href="#">
                    <i className="fas fa-search">
                    </i>
                </a> */}
        </div>
    );
};

export default FormInput;