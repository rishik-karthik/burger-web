const url = 'https://burgers-hub.p.rapidapi.com/burgers';
// const url = '';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b6835e5820msha91ce2789c1b0c4p1d0548jsn790a6a9f37cb',
		'x-rapidapi-host': 'burgers-hub.p.rapidapi.com'
	}
};

export const menuItems = async () => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("API fetch error:", error);
        return []; // Return empty array on error so UI handles it
    }
};
