import { old_pics } from './data.js';

export function load({ params }) {
	const summaries = []
	let back = 0;
	let next = parseInt(params.old_menu) + 10;

	if (parseInt(params.old_menu) > 10) {
		back = parseInt(params.old_menu) - 10;
	}

	for (let i = parseInt(params.old_menu); i < (parseInt(params.old_menu) + 10); i++) {
		try {
			let newObj = {old_slug: old_pics[i].old_slug, date: old_pics[i].date, preview_img: old_pics[i].preview_img};
			summaries.push(newObj);
		}
		catch (e) {
			break
		}
	}

	if (params.old_menu > old_pics.length - 10) {
		next = params.old_menu;
	}

	return {
		summaries, back, next
	};
}
