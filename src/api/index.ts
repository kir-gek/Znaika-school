import axios from 'axios';

// Создаем экземпляр Axios
const $Host = axios.create({
    // withCredentials: true,
    headers: {
        'Content-Type': 'text/plain' // Важно для GAS
    },
    baseURL: "https://script.google.com/macros/s/AKfycbxdLuq4UnfmF2JlRkOfYDn6pBeOVe4VqtFX0GiPlqQOMed4b7PPrFSL3yjtY42gB0iN/exec"
});


export const createZapis = async (
    name: string,
    email: string,
    phone: string,
    rate: string,
) => {

    const payload = JSON.stringify({ name, email, phone, rate });

    const { data } = await $Host.post('', payload);
    return data
}



export { $Host }