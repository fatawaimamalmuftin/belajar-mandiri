import { useContext } from "react";
import {AuthProvider} from './AuthContext.jsx'

// Custom Hook biar manggil data di halaman lain jadi super gampang
export function useAuth() {
    return useContext(AuthProvider);
}