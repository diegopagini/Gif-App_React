/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	// Data binding de React
	const [inputValue, setInputValue] = useState(''); //Dejar como un string vacio para evitar el warning y que no sea undefined
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); //Para evitar que recargue toda la pagina
		// console.log('Submit hecho');

		if (inputValue.trim().length > 2) {
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* <h1>{inputValue}</h1> */}
			<input
				type='text'
				value={inputValue}
				placeholder='Gifs'
				onChange={handleInputChange}
			/>
		</form>
	);
};

// eslint-disable-next-line react/no-typos
AddCategory.proptypes = {
	setCategories: PropTypes.func.isRequired,
};
