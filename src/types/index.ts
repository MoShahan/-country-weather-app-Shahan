export type NavbarType = {
    title: string,
    searchText: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type FormInputProps = {
    children: React.ReactNode;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchText: string;
    type?: string;
    id: string;
}

export const appTitle = "WEATHER APP"