import type { StatusPesanan } from './tipe.js';

const WARNA: Record<StatusPesanan, string> = {
  menunggu: '#B3282D',
  diproses: '#B8860B',
  dikirim: '#1B5E8C',
  selesai: '#2E6B31',
};

export function warnaStatus(status: StatusPesanan): string {
  return WARNA[status];
}

export function rupiah(nilai: number): string {
  return 'Rp ' + nilai.toLocaleString('id-ID');
}

export function ringkasCatatan(catatan: string): string {
  return catatan.length > 40 ? catatan.slice(0, 40) + '...' : catatan;
}
