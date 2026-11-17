import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = signal(['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin']);
  active = signal('Accueil');

  select(link: string) {
    this.active.set(link);
  }
}
