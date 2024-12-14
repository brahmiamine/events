import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('events') // Nom de la table dans la base de données
export class Event {
    @PrimaryGeneratedColumn('uuid') // UUID pour une meilleure gestion des identifiants
    id: string;

    @Column()
    title: string;

    @Column('timestamptz') // Format de date/heure avec fuseau horaire
    startDate: Date;

    @Column('timestamptz')
    endDate: Date;

    @Column({ nullable: true })
    type: string; // Par exemple : personnel, équipe, projet

    @Column('simple-array') // PostgreSQL array pour stocker les IDs des participants
    participants: string[];
}
