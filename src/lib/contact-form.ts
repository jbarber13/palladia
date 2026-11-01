/**
 * Static-site form backends. Both accept a normal HTML form POST (works without JavaScript)
 * and a fetch() POST with `Accept: application/json` (used for the inline success message).
 */
export type FormProvider = 'formspree' | 'web3forms';

type ProviderConfig = {
	/** Display name, used in the privacy policy */
	name: string;
	privacyUrl: string;
	action: (id: string) => string;
	/** Hidden fields required by the provider */
	hidden: (id: string) => Record<string, string>;
	/** Field name the provider treats as a spam honeypot (must stay empty) */
	honeypot: string;
	/** Field name the provider uses as the notification email subject */
	subjectField: string;
};

export const providers: Record<FormProvider, ProviderConfig> = {
	formspree: {
		name: 'Formspree',
		privacyUrl: 'https://formspree.io/legal/privacy-policy/',
		action: (id) => `https://formspree.io/f/${id}`,
		hidden: () => ({}),
		honeypot: '_gotcha',
		subjectField: '_subject'
	},
	web3forms: {
		name: 'Web3Forms',
		privacyUrl: 'https://web3forms.com/privacy',
		action: () => 'https://api.web3forms.com/submit',
		hidden: (id) => ({ access_key: id }),
		honeypot: 'botcheck',
		subjectField: 'subject'
	}
};

/** Submit a form via fetch. Resolves on success, throws with a user-facing message on failure. */
export async function submitForm(form: HTMLFormElement): Promise<void> {
	let res: Response;
	try {
		res = await fetch(form.action, {
			method: 'POST',
			body: new FormData(form),
			headers: { Accept: 'application/json' }
		});
	} catch {
		throw new Error('Network error — please check your connection and try again.');
	}
	if (!res.ok) {
		const data = await res.json().catch(() => null);
		const detail = data?.errors?.map((e: { message: string }) => e.message).join(', ');
		throw new Error(detail || data?.message || 'Something went wrong sending your message.');
	}
}
