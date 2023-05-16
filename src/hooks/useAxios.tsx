import { useState, useEffect } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

import { getErrorMessage } from './../helpers/fetchHelpers';

type ConfigObjectProps = {
    axiosInstance: AxiosInstance;
    method: 'get' | 'post' | 'delete' | 'patch' | 'put';
    url: string;
    requestConfig?: AxiosRequestConfig;
};

const useAxios = (configObj: ConfigObjectProps) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await axiosInstance[method](url, {
                    ...requestConfig,
                    signal: controller.signal,
                });
                console.log(res);
                setResponse(res.data);
            } catch (err) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, []);

    return [response, error, loading];
};

export default useAxios;
