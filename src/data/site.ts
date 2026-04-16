/**
 * Optional: set in `.env` when you deploy somewhere stable, e.g.
 * PUBLIC_SITE_URL=https://your-demo.pages.dev
 * Enables absolute canonical, Open Graph URLs, and JSON-LD.
 */
export const publicSiteUrl = (import.meta.env.PUBLIC_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? '';

/**
 * Formspree form id (endpoint `https://formspree.io/f/<id>`).
 * Set `PUBLIC_FORMSPREE_ID` at build time to override; otherwise this default is used so Vercel/GitHub builds still submit without extra env.
 * File uploads in the browser still require a Formspree plan that includes file storage — see https://formspree.io/plans
 */
const formspreeFromEnv = (import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined)?.trim();
export const formspreeFormId = formspreeFromEnv || 'xrerejjk';

/** Hotlinked reference media for this demo (portfolio, video, partner marks). */
export const mediaBase = 'https://sharpeye.co.nz';

export const site = {
	name: 'Sharpeye',
	legalName: 'Sharpeye Ltd',
	phoneDisplay: '+64 (9) 443 4450',
	phoneTel: '+6494434450',
	email: 'sales@sharpeye.co.nz',
	address: {
		street: '22–24 Porana Rd',
		city: 'Auckland',
		country: 'New Zealand',
	},
	since: 1999,
	linkedin: 'https://www.linkedin.com/company/sharpeye-ltd/',
	facebook: 'https://www.facebook.com/sharpeyeltd/',
	youtubeId: '0DmjBp9_3Qg',
	thetaUrl: 'https://theta360.com/s/npHYAjk93CwkaCulc6z2RS3NM',
} as const;

export const products = [
	{
		title: 'Glass products',
		description:
			'Residential and commercial glass, showers, balustrades, pool fencing, mirrors, splashbacks, partitions, canopies, shop fronts, safety toughened and laminated glass, double glazing, and more.',
		href: '#contact',
		icon: 'glass',
	},
	{
		title: 'Granite, marble & engineered stone',
		description: 'Surfaces for kitchens, bathrooms, and commercial fit-outs supplied to spec.',
		href: '#contact',
		icon: 'stone',
	},
	{
		title: 'Stainless steel',
		description: 'Hardware and fittings that pair with glass and stone installations.',
		href: '#contact',
		icon: 'steel',
	},
	{
		title: 'Other building products',
		description: 'Imported lines and project sourcing alongside your glass scope.',
		href: '#contact',
		icon: 'more',
	},
	{
		title: 'Fabrication & services',
		description:
			'Glass fabricating, toughening, sandblasting, water-jet cutting, design support, and installation for balustrades, bathrooms, kitchens, offices, canopies, and handrails.',
		href: '#contact',
		icon: 'service',
	},
] as const;

export const portfolio = [
	{ src: '/img/portfolio/quay.jpg', title: '200 Quay Street', year: '' },
	{ src: '/img/portfolio/hopetoun.jpg', title: '9 Hopetoun Street', year: '' },
	{ src: '/img/portfolio/fenton.jpg', title: '9 Fenton Street', year: '2015' },
	{ src: '/img/portfolio/Empire.jpg', title: 'The Empire Apartments, Central Auckland', year: '2006' },
	{ src: '/img/portfolio/kingsview.jpg', title: 'Kingsview Resort, Tauranga', year: '2005' },
	{ src: '/img/portfolio/hobson-Street127.jpg', title: '127 Hobson Street', year: '2012' },
	{ src: '/img/portfolio/bankofindia.jpg', title: 'Bank of India — Newmarket & East Tamaki', year: '' },
	{ src: '/img/portfolio/terrace.jpg', title: 'Norwood Terrace House, Flat Bush', year: '2013' },
	{ src: '/img/portfolio/hobson-Street.jpg', title: '127 / 185 Hobson Street, Central Auckland', year: '2013' },
	{
		src: '/img/portfolio/kitechthing.jpg',
		title: 'Kitchen Things — Constellation Dr, North Shore, Sylvia Park, Dominion Rd, Napier, Palmerston North',
		year: '2011–2013',
	},
	{ src: '/img/portfolio/south-me.jpg', title: 'South Auckland Medical Centre, Ōtara', year: '2011' },
	{ src: '/img/portfolio/queen-st.jpg', title: '170 Queen Street', year: '2009' },
	{ src: '/img/portfolio/spazio.jpg', title: 'SpazioCasa Albany renovation', year: '2009' },
	{ src: '/img/portfolio/Ayr-Street.jpg', title: '39 Ayr Street, Parnell', year: '2007' },
] as const;

export function assetUrl(path: string) {
	return `${mediaBase}${path.startsWith('/') ? path : `/${path}`}`;
}
