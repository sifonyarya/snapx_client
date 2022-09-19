import $api from "../pages/api/config";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
export default class AuthService {
    static async login(user_email: string, user_password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {user_email,user_password})
    }
    static async register(user_email: string, user_password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {user_email,user_password})
    }
    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }


}