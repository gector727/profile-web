import { Module } from '@nestjs/common';
import { JadwalModule } from './jadwal/jadwal.module.js';

@Module({
  imports: [JadwalModule],
})
export class AppModule {}
