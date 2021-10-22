import {baseURL} from "@/services/api";

export const getAllPrograms = () => {
    return fetch(`${baseURL}/api/program/get-programs`).then(response => response.json()).then(data => data);
}
