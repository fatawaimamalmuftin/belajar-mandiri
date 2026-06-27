import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/useAuth';

export default function Home() {
    const navigate = useNavigate();
    const { user, logoutAction } = useAuth();

    const handleLogout = () => {
        logoutAction();
        navigate('/login')
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 font-sans text-slate-100">
            <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 text-center shadow-xl border border-slate-800">
                {user ? (
                    <>
                        <span className="text-5xl">⚡</span>
                        <h1 className="text-3xl font-extrabold text-sky-400 mt-4 tracking-tight">Selamat Datang!</h1>
                        <p className="mt-2 text-sm text-slate-400">Kamu login menggunakan akun:</p>
                        <div className="my-4 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-mono text-emerald-400 border border-slate-700">
                            {user.email}
                        </div>

                        <button
                            onClick={handleLogout}
                            className="mt-4 w-full rounded-lg bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-500 active:bg-rose-700 transition cursor-pointer shadow-lg shadow-rose-900/20"
                        >
                            Keluar dari Akun (Logout)
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-5xl">🔒</span>
                        <h1 className="text-2xl font-bold text-red-400 mt-4">Akses Terbatas</h1>
                        <p className="mt-2 text-sm text-slate-400 mb-6">
                            Kamu belum masuk ke sistem. Silakan login terlebih dahulu untuk melihat dashboard.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="/login"
                                className="flex-1 text-center rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="flex-1 text-center rounded-lg bg-slate-800 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition border border-slate-700"
                            >
                                Daftar
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}