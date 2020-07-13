import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  // Variables
  myform: FormGroup;
  pagesubmit: boolean = false;
  msg: string;
  errormsg: string;

  constructor(private frmObj: FormBuilder, private httpobj: HttpClient) { }

  // on-init, initialize validators
  ngOnInit(): void {
    this.myform = this.frmObj.group({
      fname: ['', Validators.required],
      pass: ['', Validators.required],
      email: ['', Validators.required],
      lname: ['', Validators.required],
    })
  }

  // save function saves the user details post validation
  save() {
    this.pagesubmit = true;
    if (this.myform.invalid) {
      // return if form validation failed
      return false;
    }
    else {
      var url = "http://localhost:3000/users";
      this.httpobj.get(url).subscribe(response => {
        // additional validation for duplicate email
        var serverdata: any[] = response as string[];
        for (var i: number = 0; i < serverdata.length; i++) {
          if (this.myform.get('email').value == serverdata[i].email) {
            this.errormsg = "User with this email already exists";
            return false;
          }
        }
        // prepare data for backend
        var data = {
          "fname": this.myform.get('fname').value,
          "lname": this.myform.get('lname').value,
          "email": this.myform.get('email').value,
          "pass": this.myform.get('pass').value,
        }
        // pass data to backend
        this.httpobj.post(url, data).subscribe(response => {
          this.msg = "User Registered Succesfully !";
          window.location.href = "/login";
        })
      })
    }
  }

  // reset function resets the form data
  reset() {
    this.myform.reset();
    this.pagesubmit = false;
  }
}
