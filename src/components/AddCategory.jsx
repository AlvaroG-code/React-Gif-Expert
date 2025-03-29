import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        // Validar el inputValue
        if (inputValue.trim().length <= 1) return;
        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        // Limpiar el input
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
