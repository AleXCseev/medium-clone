import axios from "axios";
import {getItem} from "@/helpers/persistenseStorage"

axios.defaults.baseURL = "http://localhost:3000/api"

axios.interceptors.request.use(config => {
    const token = getItem("accessToken");
    const autorizationToken = token ? `Token ${token}` : ""
    config.headers.Authorization = autorizationToken
    return config
})

export default axios;