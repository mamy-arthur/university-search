const DOMAIN = process.env.REACT_APP_API_URL

export async function apiFetch(endpoint: string, options = {}) {
    let response = await fetch(DOMAIN + endpoint, {
        method: 'GET',
        ...options
    });

    if (response.status === 204) {
        return null;
    }
    let responseData = response.json();
    if (response.ok) {
        return responseData;
    } else {
        console.log(responseData);
    }
}