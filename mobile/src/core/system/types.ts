export const apiServer = 'http://192.168.1.2:8080';

export interface ResponseAPIError {
    code: number;
    error_message: string;
    error_code?: number;
}
