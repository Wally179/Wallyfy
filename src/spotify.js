import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "3113c81c6e434d4da1a21c768869065d";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  delete apiClient.defaults.headers.common["Authorization"];
  window.location.href = "/"; // Redireciona para a página inicial ou outra página de sua escolha
};
export const Atualizar = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  delete apiClient.defaults.headers.common["Authorization"];
  window.location.href = "/"; // Redireciona para a página inicial ou outra página de sua escolha
};

export default apiClient;
