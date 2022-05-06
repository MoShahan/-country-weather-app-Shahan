import React from "react";

export type CountryDetailsType = {
    name: string,
    population: number,
    latLong: Array<number>,
    flag: string,
    capital: Array<string>
}

// export type NavbarType = {
//     title: string,
//     searchText: string,
//     handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
//     handleSubmitClick: (e: React.FormEvent) => void,
// }

export type NavbarType = {
    title:string
}

export type FormInputProps = {
    children: React.ReactNode;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchText: string;
    type?: string;
    id: string;
    handleSubmitClick: (e: React.FormEvent) => void,
}

export type ListType = {
    countryData: Array<any>
}

