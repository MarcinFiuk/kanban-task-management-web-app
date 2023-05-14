import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';

type AxiosHookProps = {
    axiosInstance: AxiosRequestConfig;
    method: Pick<AxiosRequestConfig, 'method'>;
    url: string;
    requestConfig: {};
};

const useAxios = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); //different!
    const [controller, setController] = useState<null | AbortController>();

    const axiosFetch = async (configObj: AxiosHookProps) => {
        const { axiosInstance, method, url, requestConfig = {} } = configObj;

        try {
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await axiosInstance[method](url, {
                ...requestConfig,
                signal: ctrl.signal,
            });
            console.log(res);
            setResponse(res.data);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(controller);

        // useEffect cleanup function
        return () => controller && controller.abort();
    }, [controller]);

    return [response, error, loading, axiosFetch];
};

export default useAxios;
