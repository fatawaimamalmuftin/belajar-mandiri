import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../validation/autSchema";
import { useState } from "react";

export default function Register() {
    const navigate = useNavigate();

    const [showToast, setShowToast] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const onSubmit = (data) => {
        console.log("Data pendaftaran berhasil: ", data)

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false)
            navigate('/login')
        }, 2000);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 font-sans text-slate-100">
            {showToast && (
                <div className="fixed top-5 right-5 z-50 flex items-center gap-3 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-violet-950/40 border border-violet-400/20 animate-bounce">
                    <span>🎉</span>
                    <span>Registrasi Berhasil! Mengalihkan ke Login...</span>
                </div>
            )}

            <div className=" w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl border border-slate-800">
                <h2 className="text-2xl font-bold text-center text-violet-400 tracking-tight">Buat Akun Baru</h2>
                <p className="text-sm text-slate-400 text-center mt-1 mb-6">Silakan isi data diri kamu dengan benar.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div>
                        <label
                            htmlFor="nama"
                            className="block text-sm font-medium text-slate-300 mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="nama"
                            {...register("nama")}
                            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
                        />
                        {errors.nama && <p className="text-xs text-red-400 mt-1 font-medium">{errors.nama.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            {...register("email")}
                            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1 font-medium">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="pass"
                            className="block text-sm font-medium text-slate-300 mb-1">
                            Password
                        </label>
                        <input
                            name="pass"
                            type="password"
                            {...register("password")}
                            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
                        />
                        {errors.password && <p className="text-xs text-red-400 mt-1 font-medium">{errors.password.message}</p>}
                    </div>
                    <div className="px-20 mt-2">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-violet-600 py-3 text-sm font-semibold text-white hover:bg-violet-500 active:bg-violet-700 transition cursor-pointer shadow-lg shadow-violet-900/30"
                        >
                            Daftar Sekarang
                        </button>
                    </div>
                </form>

                <p className="text-xs text-slate-400 text-center mt-5">
                    Sudah punya akun? <Link to="/login" className="text-violet-400 hover:underline">Login di sini</Link>
                </p>
            </div>
        </div>
    );
}