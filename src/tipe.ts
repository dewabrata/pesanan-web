// Tipe ditulis manual, mengikuti bentuk response API waktu halaman ini
// pertama dibuat. Belum pernah dicek ulang sejak itu.

export type StatusPesanan =
  | 'menunggu'
  | 'diproses'
  | 'dikirim'
  | 'selesai';

export interface Pesanan {
  id: string;
  nomorPesanan: string;
  namaPelanggan: string;
  totalHarga: number;
  status: StatusPesanan;
  catatan: string;
  dibuatPada: string;
}

export interface Pelanggan {
  id: string;
  nama: string;
  email: string;
}

export interface Ringkasan {
  jumlahPesanan: number;
  totalPendapatan: number;
}
