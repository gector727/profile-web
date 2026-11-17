import { Injectable } from '@nestjs/common';
import type { CreateJadwalDto } from './dto/create-jadwal.dto.js';

export interface Jadwal {
  hari: string;
  mataKuliah: string;
  jam: string;
  ruangan: string;
  dosen: string;
}

@Injectable()
export class JadwalService {
  private readonly jadwal: Jadwal[] = [
    { hari: 'Senin', jam: '07.30–10.30', mataKuliah: 'Penjaminan Mutu Perangkat Lunak', ruangan: 'B-CLS-101', dosen: 'NIE' },
    { hari: 'Senin', jam: '10.30–13.30', mataKuliah: 'Manajemen Proyek', ruangan: 'KTT 1.17', dosen: 'PDM' },
    { hari: 'Senin', jam: '15.30–18.30', mataKuliah: 'Perancangan dan Pemrograman Web', ruangan: 'SWENG LAB', dosen: 'AJS' },
    { hari: 'Selasa', jam: '10.30–13.30', mataKuliah: 'Pemrograman Perangkat Bergerak', ruangan: 'DATA-AI LAB', dosen: 'PDM' },
    { hari: 'Selasa', jam: '14.30–17.30', mataKuliah: 'Perancangan dan Pemrograman Web', ruangan: 'KTT 1.17', dosen: 'AJS' },
    { hari: 'Rabu', jam: '08.30–10.30', mataKuliah: 'Wawasan Global TIK', ruangan: 'KTT 1.16', dosen: 'AJS' },
    { hari: 'Rabu', jam: '15.30–17.30', mataKuliah: 'Kewirausahaan', ruangan: 'KTT A-1.06', dosen: 'AFC' },
    { hari: 'Kamis', jam: '07.30–10.30', mataKuliah: 'Pengalaman Pengguna (UX)', ruangan: 'KTT 1.17', dosen: 'AJS' },
    { hari: 'Kamis', jam: '12.30–15.30', mataKuliah: 'Pemrograman Perangkat Bergerak', ruangan: 'KTT 1.09', dosen: 'PDM' },
    { hari: 'Jumat', jam: '09.30–11.30', mataKuliah: 'Kewarganegaraan (PKN)', ruangan: 'KTT 1.08', dosen: 'MSC' },
  ];

  findAll(): Jadwal[] {
    return this.jadwal;
  }

  findByHari(hari: string): Jadwal[] {
    return this.jadwal.filter(
      (item) => item.hari.toLowerCase() === hari.toLowerCase(),
    );
  }

  create(data: CreateJadwalDto): Jadwal {
    const jadwalBaru: Jadwal = {
      hari: data.hari,
      mataKuliah: data.mataKuliah,
      jam: data.jam,
      ruangan: data.ruangan,
      dosen: data.dosen,
    };
    this.jadwal.push(jadwalBaru);
    return jadwalBaru;
  }
}
