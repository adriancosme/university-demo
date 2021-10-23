import {baseURL} from "@/services/api";
import {User} from "@/types/types";

export const getAllUsers = () => {
    return fetch(`${baseURL}/api/user/get-users`).then(response => response.json()).then(data => data);
}

export const editUser = (id: number | undefined, data: User) => {
    return fetch(`${baseURL}/api/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => data);
}

export const createUser = (data: User) => {
    return fetch(`${baseURL}/api/user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => data);
}

export const deleteUser = (id: number) => {
    return fetch(`${baseURL}/api/user/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json()).then(data => data);
}
