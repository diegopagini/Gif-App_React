/** @format */

import React, { useState } from 'react';

export const AddCategory = () => {
	// Data binding de React
	const [inputValue, setInputValue] = useState(' ');
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); //Para evitar que recargue toda la pagina
		console.log('Submit hecho');
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* <h1>{inputValue}</h1> */}
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};
