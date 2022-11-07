import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showAlert(title:string, message: string) {
    alert(`${title}\n\n${message}`);
  }
}
