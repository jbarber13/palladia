import type { FormProvider } from './contact-form.ts';

/**
 * Central business details. Edit values here and they update everywhere on the site.
 * Anything marked TODO is placeholder content.
 */
export const site = {
	name: 'Palladia Music Therapy',
	shortName: 'Palladia',
	/** Production URL, no trailing slash. Used for canonical links and the sitemap. */
	url: 'https://palladiamt.com',
	tagline: 'Individual and group music therapy in Lake County, IL', // TODO: final tagline
	/** Tagline shown in the footer only. */
	footerTagline: 'Music Therapy That Meets You Where You Are',
	description:
		'Palladia Music Therapy offers individual and group music therapy sessions for clients across Lake County, IL.', // TODO: used as default meta description

	owner: {
		name: 'Gwendolyn Barber',
		credentials: 'MT-BC, LPMT',
		title: 'Music Therapist-Board Certified & Licensed Professional Music Therapist'
	},

	contact: {
		phone: '(847) 282-0048',
		email: 'gwen@palladiamt.com',
		/** Leave empty to hide. Shown as "City, State" only — no street address needed for a mobile practice. */
		city: 'Chicago',
		region: 'IL'
	},

	serviceArea: ['Lake County, IL'], // TODO

	/**
	 * Contact form backend (GitHub Pages can't process forms itself). See README → "Contact form".
	 * - formspree: `id` is the form ID from https://formspree.io/f/<id>
	 * - web3forms: `id` is the access key from https://web3forms.com
	 * While `id` is empty the form is shown but disabled.
	 */
	contactForm: {
		provider: 'formspree' as FormProvider,
		id: 'xjyyplwp'
	},

	/** Shown at the top of the privacy policy. Update whenever the policy changes. */
	privacyPolicyUpdated: '2026-11-11',

	social: [
		// TODO: add or remove links. Empty list hides the section.
		// { label: 'Instagram', href: 'https://instagram.com/...' },
		// { label: 'Facebook', href: 'https://facebook.com/...' }
	] as { label: string; href: string }[]
};

export type Service = {
	/** Anchor on the Services page (e.g. /services#individual-sessions). */
	id: string;
	title: string;
	summary: string;
	/** Optional shorter text for the home page cards. Falls back to `summary`. */
	homeDescription?: string;
	details: string[];
};

/** Services shown on the Home and Services pages. */
export const services: Service[] = [
	{
		id: 'group-sessions',
		title: 'Group Sessions',
		summary: 'Interactive and customized music therapy programs for group settings of all kinds.', // TODO
		homeDescription:
			'Interactive and customized music therapy programs for group settings of all kinds.',
		details: [
			// TODO: replace with real details
			'Assessment & Program Design: An initial intake helps shape group-centered goals and session plans, with clinical progress documented after every session.',
			'Updates & Facility Communication: Regular updates and documentation are provided to help facilities, schools, and care teams track participant engagement and program outcomes.',
			'All Ages & Needs: We are able to provide support to clients across the lifespan, from young children to older adults, with varying levels of abilities and needs.',
			'Mobile Service: Sessions occur on-site at your facility or organization, with all instruments and materials provided by Palladia Music Therapy.'
		]
	},
	{
		id: 'individual-sessions',
		title: 'Individual Sessions',
		summary: 'Private, one-on-one music therapy providing focused, individualized support.', // TODO
		homeDescription: 'Private, one-on-one music therapy providing focused, individualized support.',
		details: [
			// TODO: replace with real details
			'Assessment & Clinical Planning: An initial assessment and intake forms help shape personalized goals and customized session plans and progress is documented every session.',
			'Updates & Communication: Regular updates about progress can be provided to keep families and care teams fully informed.',
			'All Ages & Needs: We are able to provide support to clients across the lifespan, from young children to older adults, with varying levels of abilities and needs.',
			'Flexible Contracting: Services are available through direct private contracts for individuals and families, or as a service provided through schools, care facilities, and organizations.',
			'Mobile Service: Sessions occur in-home or on-site (within a school/facility setting) with all instruments and materials provided by Palladia Music Therapy.'
		]
	}
];
