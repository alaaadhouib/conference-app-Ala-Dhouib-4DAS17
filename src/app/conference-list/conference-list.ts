import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  search = signal('');

  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés de Angular 21 : signals, zoneless et control flow.',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique pour maîtriser signal, computed et effect.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 40,
      nbParticipants: 34,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Tendances du développement web front-end et back-end.',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      id: 4,
      title: 'Cloud & DevOps Summit',
      description: 'Déploiement continu, conteneurs et bonnes pratiques DevOps.',
      date: new Date('2027-01-12'),
      place: 'Sfax',
      maxParticipants: 80,
      nbParticipants: 12,
    },
    {
      id: 5,
      title: 'Data Science Day',
      description: 'Journée dédiée à la data science et au machine learning.',
      date: new Date('2026-03-10'),
      place: 'Monastir',
      maxParticipants: 60,
      nbParticipants: 60,
    },
  ]);

  upcoming = computed(() => {
    const today = new Date();
    const term = this.search().trim().toLowerCase();
    return this.conferences()
      .filter(c => c.date >= today && c.title.toLowerCase().includes(term))
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  });

  remaining(conf: Conference) {
    return conf.maxParticipants - conf.nbParticipants;
  }

  register(id: number) {
    this.conferences.update(list =>
      list.map(c =>
        c.id === id && this.remaining(c) > 0 ? { ...c, nbParticipants: c.nbParticipants + 1 } : c
      )
    );
  }
}
