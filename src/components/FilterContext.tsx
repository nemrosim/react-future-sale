import React, { useContext, useState } from 'react';

export interface ContextProps {
    filterValue?: string;
    setFilterValue: Function;
}

export const initialState: ContextProps = {
    filterValue: undefined,
    setFilterValue: () => undefined,
};

export const FilterContext = React.createContext<ContextProps>(initialState);

export const FilterProvider: React.FC = ({ children }) => {
    /**
     * Sign in/Sign out was removed from the MVP
     */
    const [filterValue, setFilterValue] = useState<string>();

    return (
        <FilterContext.Provider
            value={{
                filterValue,
                setFilterValue,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = (): ContextProps => useContext<ContextProps>(FilterContext);
