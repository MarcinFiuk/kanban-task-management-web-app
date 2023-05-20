// import { useState, useEffect } from 'react';
// import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// import { getErrorMessage } from './../helpers/fetchHelpers';

// type ConfigObjectProps = {
//     axiosInstance: AxiosInstance;
//     method: 'get' | 'post' | 'delete' | 'patch' | 'put';
//     url: string;
//     requestConfig?: AxiosRequestConfig;
// };

// const useAxios = (configObj: ConfigObjectProps) => {
//     const { axiosInstance, method, url, requestConfig = {} } = configObj;

//     const [response, setResponse] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const controller = new AbortController();

//         const fetchData = async () => {
//             try {
//                 const res = await axiosInstance[method](url, {
//                     ...requestConfig,
//                     signal: controller.signal,
//                 });
//                 setResponse(res.data);
//             } catch (err) {
//                 const errorMessage = getErrorMessage(err);
//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();

//         return () => controller.abort();
//     }, []);

//     return [response, error, loading];
// };

// export default useAxios;

import { useState, useEffect } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getErrorMessage } from './../helpers/fetchHelpers';

type ConfigObject = {
    axiosInstance: AxiosInstance;
    url: string;
    method?: keyof AxiosInstance;
    requestConfig?: AxiosRequestConfig;
};

type UseAxiosResponse<T> = {
    data: T | null;
    error: string | null;
    loading: boolean;
};

const useAxios = <T,>(configObj: ConfigObject): UseAxiosResponse<T> => {
    const {
        axiosInstance,
        url,
        method = 'get',
        requestConfig = {},
    } = configObj;

    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (): Promise<void> => {
            try {
                const res: AxiosResponse<T> = await axiosInstance.request<T>({
                    url,
                    method,
                    ...requestConfig,
                    signal: controller.signal,
                });

                setData(res.data);
                setError(null);
            } catch (err) {
                setData(null);
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, []);

    return { data, error, loading };
};

export default useAxios;
