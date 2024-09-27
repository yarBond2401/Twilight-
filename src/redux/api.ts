import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class TwilightApi {
    private axiosInstance: AxiosInstance;
    private apiKey?: string;

    constructor(baseUrl: string, apiKey?: string) {
        this.apiKey = apiKey;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
        });
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get(url, this.attachAuthorization(config));
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, this.attachAuthorization(config));
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, this.attachAuthorization(config));
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.delete(url, this.attachAuthorization(config));
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    private attachAuthorization(config?: AxiosRequestConfig): AxiosRequestConfig {
        const headers = config?.headers || {};
        if (this.apiKey) {
            headers['Authorization'] = `Bearer ${this.apiKey}`;
        }
        return { ...config, headers };
    }

    private handleError(error: any) {
        if (axios.isAxiosError(error)) {
            console.error('API Error:', error.response?.data || error.message);
        } else {
            console.error('Unknown Error:', error);
        }
    }
}

export const twilightApi = new TwilightApi(process.env.TWILIGHT_API_URL as string, process.env.TWILIGHT_API_KEY);
