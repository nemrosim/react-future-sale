export class AxiosErrorHandler {
    /**
     * Method was copied from official site of "axios" package for error handlers
     * @param error
     */
    static errorConsoleLog = (error: any) => {
        if (error.response) {
            /*
            The request was made and the server responded with a status code
            that falls out of the range of 2xx
            */
            const result = {
                code: error.response.data.code,
                message: error.response.data.message,
                status: error.response.status,
                headers: error.response.headers,
            };
            console.error(result);
            return result;
        }

        if (error.request) {
            /*
            The request was made but no response was received
             `error.request` is an instance of XMLHttpRequest in the browser and an instance of
             http.ClientRequest in node.js
             */
            const { request } = error;
            console.error('error.request:', { request });
            return request;
        }

        if (error.message) {
            // Something happened in setting up the request that triggered an Error
            const { message } = error;
            console.error('error.message:', { message });
            return { message: error.message };
        }

        console.error('Request error (error.config)', { config: error.config });
        return error.config;
    };
}
