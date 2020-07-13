import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // Variables
  userlist:any[];
  email:string;
  pass:string;
  msg:string;
  errormsg:string;

  constructor(private httpobj : HttpClient) { }

  // on-init, load the users list to make it easy to authenticate on login
  ngOnInit(): void {
    var url = "http://localhost:3000/users";
      this.httpobj.get(url).subscribe(response =>{
        this.userlist = response as string[];
      });
  }

  // login function logs-in a user, by looking for a matching user.
  // if successfull it sets "pixel-user" session storage variable to make use in other pages
  // and redirects to /employeeinfo (the main home page)
  login()
  {
    for(var i:number=0;i<this.userlist.length;i++)
    {
      if(this.email==this.userlist[i].email && this.pass==this.userlist[i].pass)
      {
        this.errormsg =  "";
        this.msg = "Login Successfull";
        sessionStorage.setItem("pixel-user",this.email);
        window.location.href = "/employeeinfo";
        return;
      }
    }
    this.errormsg = "Invalid Email or Password"
  }
}
