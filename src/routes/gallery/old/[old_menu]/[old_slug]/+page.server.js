import { error } from '@sveltejs/kit';
import { old_pics } from '../data.js';

export function load({ params }) {
	const pic = old_pics.find((pic) => pic.old_slug === params.old_slug);

	if (!pic) throw error(404);

	return {
		pic
	};
}
