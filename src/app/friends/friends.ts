import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends = signal(['Sami', 'Sarra', 'Amine']);
  newFriend = signal('');

  addFriend() {
    const name = this.newFriend().trim();
    if (name) {
      this.friends.update(list => [...list, name]);
      this.newFriend.set('');
    }
  }
}
