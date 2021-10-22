import {baseURL} from "@/services/api";

export const getAllUsers = () => {
    return fetch(`${baseURL}/api/user/users`).then(response => response.json()).then(data => data);
}
