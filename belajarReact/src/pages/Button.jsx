// Button.jsx
function Button({ teks, onClick }) {
    // Menggunakan destructuring supaya langsung ambil 'teks' dan 'onClick'
    return (
        <button
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 m-2"
            onClick={onClick}   
        >
            {teks}
        </button>
    );
}
export default Button;