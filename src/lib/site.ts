/**
 * Central business details. Edit values here and they update everywhere on the site.
 * Anything marked TODO is placeholder content.
 */
export const site = {
	name: 'Palladia Music Therapy',
	shortName: 'Palladia MT',
	tagline: 'Individual and group music therapy in the Chicagoland area', // TODO: final tagline
	description:
		'Palladia Music Therapy offers individual and group music therapy sessions for clients across the Chicagoland area.', // TODO: used as default meta description

	owner: {
		name: 'Firstname Lastname', // TODO
		credentials: 'MT-BC', // TODO: e.g. MT-BC, NMT, etc.
		title: 'Board-Certified Music Therapist' // TODO
	},

	contact: {
		phone: '(555) 555-5555', // TODO
		email: 'hello@example.com', // TODO
		/** Leave empty to hide. Shown as "City, State" only — no street address needed for a mobile practice. */
		city: 'Chicago',
		region: 'IL'
	},

	serviceArea: ['Chicago', 'North Suburbs', 'West Suburbs', 'South Suburbs'], // TODO

	/**
	 * GitHub Pages can't process forms. Create a free form at https://formspree.io
	 * and paste its endpoint here (e.g. 'https://formspree.io/f/abcdwxyz').
	 * While empty, the contact form is shown but disabled.
	 */
	formEndpoint: '',

	social: [
		// TODO: add or remove links. Empty list hides the section.
		// { label: 'Instagram', href: 'https://instagram.com/...' },
		// { label: 'Facebook', href: 'https://facebook.com/...' }
	] as { label: string; href: string }[]
};

export type Service = {
	title: string;
	summary: string;
	details: string[];
};

/** Services shown on the Home and Services pages. */
export const services: Service[] = [
	{
		title: 'Individual Sessions',
		summary:
			'One-on-one music therapy tailored to each client’s goals, strengths, and preferences.', // TODO
		details: [
			// TODO: replace with real details
			'Initial assessment and individualized treatment plan',
			'In-home, in-studio, or telehealth options',
			'Children, teens, and adults',
			'Regular progress updates for families and care teams'
		]
	},
	{
		title: 'Group Sessions',
		summary:
			'Engaging group music therapy for schools, care facilities, and community organizations.', // TODO
		details: [
			// TODO: replace with real details
			'Programs designed around the needs of each group',
			'Skilled nursing, memory care, schools, and day programs',
			'Recurring weekly sessions or one-time events',
			'Documentation available for facility records'
		]
	}
];
