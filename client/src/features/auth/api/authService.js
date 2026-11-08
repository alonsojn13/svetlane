import apiClient from "../../../apiClient";


// Object with properties
export const authService = {

    register : async (userData) => {
        const response = await apiClient.post("/auth/register", userData);
        return response.data;
    },

    login : async (credentials) => {
        const response = await apiClient.get("/auth/login", credentials);
        return response.data;
    },
};
