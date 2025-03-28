import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessoresService {
  create(CreateProfessorDto: CreateProfessorDto) {
    return 'This action adds a new professor';
  }

  findAll() {
    return `This action returns all professores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professor`;
  }

  update(id: number, UpdateProfessorDto: UpdateProfessorDto) {
    return `This action updates a #${id} professor`;
  }

  remove(id: number) {
    return `This action removes a #${id} professor`;
  }
}
