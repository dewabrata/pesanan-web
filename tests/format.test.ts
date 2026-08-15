import { describe, it, expect } from 'vitest';
import { rupiah, ringkasCatatan, warnaStatus } from '../src/format.js';

describe('format', () => {
  it('memformat rupiah', () => {
    expect(rupiah(1250000)).toContain('1.250.000');
  });

  it('memotong catatan panjang', () => {
    expect(ringkasCatatan('x'.repeat(50))).toHaveLength(43);
  });

  it('mengembalikan warna untuk tiap status', () => {
    expect(warnaStatus('diproses')).toBe('#B8860B');
  });
});
