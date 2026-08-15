import { useEffect, useState } from 'react';
import type { Pesanan, Ringkasan } from './tipe.js';
import { api } from './api.js';
import { KartuPesanan } from './KartuPesanan.js';
import { rupiah } from './format.js';
import './style.css';

export function App() {
  const [pesanan, setPesanan] = useState<Pesanan[]>([]);
  const [ringkasan, setRingkasan] = useState<Ringkasan | null>(null);
  const [pesan, setPesan] = useState<string | null>(null);

  useEffect(() => {
    api.daftarPesanan().then(setPesanan).catch(() => setPesan('gagal memuat pesanan'));
    api.ringkasan().then(setRingkasan).catch(() => setPesan('gagal memuat ringkasan'));
  }, []);

  return (
    <main>
      <h1>Pesanan</h1>
      {ringkasan && (
        <p className="ringkasan">
          {ringkasan.jumlahPesanan} pesanan &middot; {rupiah(ringkasan.totalPendapatan)}
        </p>
      )}
      {pesan && <p className="pesan">{pesan}</p>}
      <div className="daftar">
        {pesanan.map((p) => (
          <KartuPesanan key={p.id} pesanan={p} />
        ))}
      </div>
    </main>
  );
}
