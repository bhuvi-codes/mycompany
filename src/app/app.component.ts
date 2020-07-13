import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycompany';
  user:string;

  constructor()
  {
    // Fetch the "pixel-user" session storage variable to see if already logged-in
    this.user = sessionStorage.getItem("pixel-user");

    // If user is not logged in and is not in any of login or signup pages, redirect to login
    if(!this.user && window.location.pathname!="/login" && window.location.pathname!="/signup" )
    {
      window.location.href = "/login";
    }
  }

  // logout function logs-out the user by removing the session storage variable "pixel-user"
  logout()
  {
    sessionStorage.removeItem("pixel-user");
    window.location.href = "/login";
  }
}
