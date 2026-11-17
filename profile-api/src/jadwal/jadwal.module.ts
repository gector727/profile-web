import { Module } from '@nestjs/common';
import { JadwalController } from './jadwal.controller.js';
import { JadwalService } from './jadwal.service.js';

@Module({
  controllers: [JadwalController],
  providers: [JadwalService],
})
export class JadwalModule {}
