import axios from 'axios';

export const submitFormData = async (
	formData: object,
	formId: string,
	formCtx: object
) => {
	const baseURL = 'https://api.hsforms.com/submissions/v3/integration/submit';
	const portalId = '6152086';
	const fields = [];

	const {
		data: { ip },
	} = await getIpAddress();

	const hutk = getCookie('hubspotutk');

	for (const [key, value] of Object.entries(formData)) {
		fields.push({ name: key, value });
	}

	const body = {
		fields,
		context: { ...formCtx, ipAddress: ip, hutk },
		legalConsentOptions: {
			legitimateInterest: {
				value: true,
				subscriptionTypeId: 9804856,
				legalBasis: 'LEAD',
				text: 'Jesse Rhodes Salon needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time.',
			},
		},
	};

	await axios.post(`${baseURL}/${portalId}/${formId}`, body);
};

const getCookie = (cookieName: string) => {
	let name = cookieName + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let cookieArray = decodedCookie.split(';');
	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return '';
};

const getIpAddress = async () => {
	return await axios.get('https://ipapi.co/json/');
};
