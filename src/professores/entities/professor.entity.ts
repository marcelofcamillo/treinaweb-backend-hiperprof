import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 100 })
  nome: string;

  @Column({ nullable: false, length: 255 })
  email: string;

  @Column()
  idade: number;

  @Column({ type: 'text', nullable: false })
  descricao: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  valorHora: number;

  @Column({ nullable: true, length: 255 })
  fotoPerfil: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
