import { API } from "./constants";

/**
 * Get base app settings
 */
export const now = () => new Promise((resolve, reject) => {
	fetch(API._BASE + API.NOW)
		.then(response => resolve(response.json()))
		.catch(error => reject(error))
})
