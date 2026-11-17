import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto.js';
import { JadwalService } from './jadwal.service.js';

@Controller('api/jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Get()
  findAll() {
    return this.jadwalService.findAll();
  }

  @Get(':hari')
  findByHari(@Param('hari') hari: string) {
    const hasil = this.jadwalService.findByHari(hari);
    if (hasil.length === 0) {
      throw new NotFoundException(`Jadwal untuk hari "${hari}" tidak ditemukan.`);
    }
    return hasil;
  }

  @Post()
  create(@Body() data: CreateJadwalDto) {
    return this.jadwalService.create(data);
  }
}
