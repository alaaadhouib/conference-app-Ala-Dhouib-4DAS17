import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal([
    'Sami a accepté votre invitation.',
    'La conférence Signals Workshop approche !',
  ]);
  count = computed(() => this.notifications().length);
  visible = signal(false);

  toggle() {
    this.visible.update(v => !v);
  }
}
