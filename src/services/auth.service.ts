import {baseURL} from "@/services/api";

export const authenticate = (data: { username: string, password: string }) => {
    return fetch(`${baseURL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            if (response.status === 401){
                throw new Error('Credenciales no válidas');
            }
        }
        return response.json();
    }).then(data => data).catch(error => Promise.reject(error));
}