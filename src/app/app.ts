import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Profil } from './profil/profil';
import { Friends } from './friends/friends';
import { Notifications } from './notifications/notifications';
import { ConferenceList } from './conference-list/conference-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Profil, Friends, Notifications, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
