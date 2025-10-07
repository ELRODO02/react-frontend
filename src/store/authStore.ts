import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import api from "../api/api";
import type { Empleado, LoginPayload, DecodedToken } from "../types/empleado";
interface AuthState {
    token: string | null;
    user: DecodedToken | null;
    login: (payload: LoginPayload) => Promise<void>;
    register: (payload: Empleado) => Promise<void>;
    logout: () => void;
    
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    async login(payload) {
        const { data } = await api.post('/empleado/login', payload);
        const decoded: DecodedToken = jwtDecode(data.token);
        set({ token: data.token, user: decoded });
    },
    async register(payload) {
        await api.post('/empleado/create', payload);
    },
    logout() {
        set({ token: null, 
              user: null 
            });
    }
}));

    
