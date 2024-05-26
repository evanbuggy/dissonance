import { posts } from './data.js';

export function load({ params }) {
	const summaries = []
	let back = 0;
	let next = parseInt(params.menu) + 10;

	if (parseInt(params.menu) > 10) {
		back = parseInt(params.menu) - 10;
	}

	for (let i = parseInt(params.menu); i < (parseInt(params.menu) + 10); i++) {
		try {
			let newObj = {slug: posts[i].slug, title: posts[i].title, date: posts[i].date, blurb: posts[i].blurb, bg_img:posts[i].bg_img};
			summaries.push(newObj);
		}
		catch (e) {
			break
		}
	}

	if (params.menu > posts.length - 10) {
		next = params.menu;
	}

	return {
		summaries, back, next
	};
}
