import type { Pesanan } from './tipe.js';
import { warnaStatus, rupiah, ringkasCatatan } from './format.js';

export function KartuPesanan({ pesanan }: { pesanan: Pesanan }) {
  return (
    <article className="kartu">
      <div className="baris-atas">
        <strong>{pesanan.nomorPesanan}</strong>
        <span className="label" style={{ background: warnaStatus(pesanan.status) }}>
          {pesanan.status}
        </span>
      </div>
      <p className="pelanggan">{pesanan.namaPelanggan}</p>
      <p className="total">{rupiah(pesanan.totalHarga)}</p>
      <p className="catatan">{ringkasCatatan(pesanan.catatan)}</p>
    </article>
  );
}
