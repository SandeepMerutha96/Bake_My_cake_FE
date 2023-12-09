import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false;

        login(adminCode: string) {
            this.isLoggedIn = adminCode === "TG@2022";
        }

        logout() {
            this.isLoggedIn = false;
        }
}
