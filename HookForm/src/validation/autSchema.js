import * as yup from 'yup'

export const loginSchema = yup.object({
    email:yup
    .string()
    .required('Email tidak boleh kosong')
    .email('Format email kamu salah (contoh: nama@email.com)'),
    password: yup
    .string()
    .required('Password tidak boleh kosong')
    .min(6,'Password minimal harus 6 karakter')
}).required()

export const registerSchema = yup.object({
    nama:yup
    .string()
    .required('Nama lengkap wajib diisi'),
    email: yup
    .string()
    .required('Email tidak boleh kosong ya')
    .email('Format email kamu salah'),
    password: yup
    .string()
    .required('Password tidak boleh kosong ya')
    .min(6, 'Password minimal harus 6 karakter'),
  konfirmasiPassword: yup
    .string()
    .required('Konfirmasi passwordmu dulu')
    .oneOf([yup.ref('password'), null], 'Password tidak cocok, coba cek lagi'),
}).required()