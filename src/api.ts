import type { Pesanan, Pelanggan, Ringkasan } from './tipe.js';

async function ambil<T>(url: string): Promise<T> {
  const r = await fetch(url);
  if (!r.ok) throw new Error('permintaan gagal: ' + r.status);
  return (await r.json()) as T;
}

export const api = {
  daftarPesanan: () => ambil<Pesanan[]>('/api/pesanan'),
  detailPesanan: (id: string) => ambil<Pesanan>(`/api/pesanan/${id}`),
  daftarPelanggan: () => ambil<Pelanggan[]>('/api/pelanggan'),
  ringkasan: () => ambil<Ringkasan>('/api/ringkasan'),
};
