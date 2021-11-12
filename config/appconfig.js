
const NODE_ENV="development"
const getAppConfig = () => {
    if (NODE_ENV === 'development') {
        return {
            apiBaseUrl: 'https://mart.trao.in/api',
        };
    } 

    return {
        apiBaseUrl: 'https://mart.trao.in/api',
    };
};

export default getAppConfig;
