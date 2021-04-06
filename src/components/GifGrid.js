/** @format */

import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className='card-title animate__animated animate__fadeIn'>
				{category}
			</h3>

			{loading ? (
				<p className='loading animate__animated animate__flash'>Loading</p>
			) : null}
			{/* {loading && <p>Loading</p>} */}

			<div className='card-grid animate__animated animate__fadeIn'>
				{images.map((img) => {
					return <GifGridItem key={img.id} {...img} />;
				})}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
