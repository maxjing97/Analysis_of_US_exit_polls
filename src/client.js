//this file does communication with the server
export default async function set_post_data(data_path) {
    const url="http://localhost:4000/set"
    
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "data_path": data_path })
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        console.log("data returned", data);
        return data;
    } catch (e) {
        return e;
    }    
}