import axios from "axios";

const navigateToSignIn = () => {
    window.location.href = '/sign_in';
};

const apiUrl = "http://127.0.0.1:8000"
export const api = axios.create({
    baseURL: apiUrl,
});
export const apiWithoutAuth = axios.create({
    baseURL: apiUrl,
});
const excludedUrls = [
    "/course/", // Example URL to exclude
    "/api/auth/login", // Another example URL to exclude
    // Add more URLs as needed
];


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authTokens");
        const tokens = JSON.parse(token);
        const accessToken = tokens?.access;
        if (token) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const requestUrl = error.config.url;
        const isExcluded = excludedUrls.some((url) => requestUrl.includes(url));
        
        if (error.response && error.response.status === 401 && !isExcluded) {
            // 401 Unauthorized error, indicating user is not authenticated
            navigateToSignIn();
        }
        return Promise.reject(error);
    }
);
