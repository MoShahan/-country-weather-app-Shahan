import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";
import SimpleNavbar from "./components/SimpleNavbar";
import CapitalInformation from "./pages/CapitalInformation";
import { appTitle } from "./variables";

describe("Basic test", () => {
    test("Checking if the Title is WEATHER APP", () => {
        expect(appTitle).toBe("WEATHER APP");
    });
});



// unit testing

describe("testing Simple Navbar component", () => {
    test("rendering", () => { 
        render(
            <SimpleNavbar/>
        )
    })
})

describe("testing FormInput component", () => {
    test("rendering FormInput component", () => {
        const FormInputProps = {
            onChange: jest.fn(),
            searchText: "India",
        };
        render(
            <FormInput {...FormInputProps} />
        );
    });

    test("checking if onChange function is called", () => {
        const FormInputProps = {
            onChange: jest.fn(),
            searchText: "India",
        };
        render(
            <FormInput {...FormInputProps} />
        );
        const inputBox = screen.getByDisplayValue("India");
        // screen.debug();
        fireEvent.change(inputBox, { target: { value: "United" } });
        fireEvent.change(inputBox, { target: { value: "UAE" } });
        expect(FormInputProps.onChange).toHaveBeenCalledTimes(2);
    });
})



// integration testing

describe("Rendering the Capital component", () => {
    test("checking if render works", () => {
        render(
            <BrowserRouter>
                <CapitalInformation />
            </BrowserRouter>
        );
    });
});



// snapshot

describe("SNAPSHOT", () => {
    test("snapshot testing", () => {
        const NavbarProps = {
            title: "TEST",
            searchText: "Country"
        };
        const { NavMain } = render(
            < Navbar {...NavbarProps} />
        );
        expect(NavMain).toMatchSnapshot();
    });
})



// Your code must have at least 80 % code coverage, which
// means all your code must have unit, integration and
// snapshot test.You can check the coverage by running the
// command: npm test--coverage