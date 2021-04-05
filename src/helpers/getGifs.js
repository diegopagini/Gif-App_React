/** @format */

export const getGifs = async (category) => {
	const API_KEY = 'IOKixTh0CF2zErhoctHCjTKpJUJN6XAQ';
	const LIMIT = 10;

	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=${LIMIT}&api_key=${API_KEY}`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
};
