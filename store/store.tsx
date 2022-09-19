import { makeAutoObservable, observable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import  {AuthResponse}  from "../models/response/AuthResponse";
import { API_URL } from "../pages/api/config";

export default class Store {
    isAuth = false;
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    async login(user_email: string,user_password: string) {
        const response = await AuthService.login(user_email,user_password);
        window.location.href = '/profile';
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('user_id', response.data.user_id);
        this.setAuth(true);
    }
    async register(user_email: string,user_password: string) {
        try {
            const response = await AuthService.register(user_email,user_password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            window.location.href = '/profile';
        } catch (error) {
        }
   }
   async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.clear();
            this.setAuth(false);
            window.location.href = '/login';
        } catch (error) {
        }
    }
    async checkAuth() {
        this.setLoading(true);
        this.setAuth(true);
        if (this.isAuth == false) {
            try {
                const response = await axios.get<AuthResponse>(API_URL + `/auth/refresh`, {withCredentials: true})
                localStorage.setItem('token', response.data.accessToken);
                this.setAuth(true);
            } catch (e) {
            }
        }
    }
}