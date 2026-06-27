import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import { loginSchema } from "../validation/autSchema";
import { useAuth } from "../context/useAuth";

export default function Login() {
    const navigate = useNavigate();
    const { loginAction } = useAuth();

    const [showToast, setShowToast] = useState(false);

    const { register, handleSubmit, formState: { error } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data) => {
        console.log("Data input logtin", data)

        loginAction({ email: data.email })

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            navigate('/');
        }, 2000);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 font-sans text-slate-100">

            {showToast && (
                <div className="fixed top-5 right-5 z-50 flex items-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/40 border border-emerald-400/20 animate-bounce">
                    <span>🚀</span>
                    <span>Login Berhasil! Mengalihkan ke Dashboard...</span>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2 space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
                    />
                    {error.email && <p className="text-xs text-red-400 mt-1 font-medium">{error.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="pass" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                    <input
                        name="pass"
                        type="password"
                        {...register("password")}
                        className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
                    />
                    {error.password && <p className="text-xs text-red-400 mt-1 font-medium">{error.password.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700 transition cursor-pointer shadow-lg shadow-emerald-900/30"
                >
                    Masuk Sekarang
                </button>

                <p className="text-xs text-slate-400 text-center mt-5">
                    Belum punya akun? <Link to="/register" className="text-emerald-400 hover:underline">Daftar di sini</Link>
                </p>
            </form>
        </div>
    )
}