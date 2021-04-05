/** @format */
import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState(['']);

	// const handleAdd = () => {
	// No se debe modificar el estado anterior, por eso no se utilizar el "push"
	// setCategories([...categories, 'HunterXHunter']);
	// Si quisiera que este al comienzo del array
	// setCategories(['HunterXHunter', ...categories]);
	// Otra forma de agregar
	// setCategories((cats) => [...cats, 'HunterXHunter']);
	// };

	return (
		<>
			<h2 className='title'>GifExpertApp</h2>
			{/* Nombre de la propiedad primero, luego el nombre del metodo */}
			<AddCategory setCategories={setCategories} />
			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			{/* como el ngFor de Angular: */}

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
export default GifExpertApp;
