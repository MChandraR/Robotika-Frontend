import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

// Fungsi untuk menampilkan toast
export const showToast = (icon: 'success' | 'error' | 'warning' | 'info', title: string) => {
    Toast.fire({
        icon: icon,
        title: title,
    });
};

// Fungsi untuk menampilkan dialog
export const showDialog = (icon: 'success' | 'error' | 'warning', title: string, text?: string) => {
    MySwal.fire({
        icon: icon,
        title: title,
        text: text,
    });
};

export const showConfirmDialog = async (title: string, text?: string) => {
    const result = await MySwal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
    });

    return result.isConfirmed; // Kembalikan true jika "Ya" dipilih, false jika "Tidak"
};

export { MySwal, Toast }; // Ekspor untuk digunakan di tempat lain
