/** @format */
import { useState } from 'react';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState([
		'One Punch',
		'Samurai X',
		'Dragon Ball',
	]);

	const handleAdd = () => {
		// No se debe modificar el estado anterior, por eso no se utilizar el "push"
		setCategories([...categories, 'HunterXHunter']);
		// Si quisiera que este al comienzo del array
		// setCategories(['HunterXHunter', ...categories]);
		// Otra forma de agregar
		// setCategories((cats) => [...cats, 'HunterXHunter']);
	};

	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />

			<button onClick={handleAdd}>Agregar</button>

			{/* como el ngFor de Angular: */}
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</>
	);
};
export default GifExpertApp;
