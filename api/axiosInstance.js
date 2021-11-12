import axios from 'axios';
import getAppConfig from '../config/appconfig';

 class AxiosInstance {
    instance = axios.create();

    addBaseUrlToAxiosInstance = () => {
        this.instance.defaults.baseURL = getAppConfig().apiBaseUrl;
    };

    addAuthTokenToAxiosInstance = (token) => {
        this.instance.defaults.headers['bearer-token'] = token;
    };
}

export default new AxiosInstance();