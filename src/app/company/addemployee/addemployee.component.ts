import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  // Variables
  myform: FormGroup;
  pagesubmit: boolean = false;
  agelist: number[] = [];
  msg: string;
  errormsg: string;

  constructor(private frmObj: FormBuilder, private httpobj: HttpClient) {
    // Prepare an age-list for options (ideally this could have been a number field)
    for (var i = 1; i <= 60; i++) {
      this.agelist.push(i);
    }
  }

  // on-init, initialize validators
  ngOnInit(): void {
    this.myform = this.frmObj.group({
      ename: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      dept: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      technology: [''],
    })
  }

  // save function saves the employee information to backend
  save() {
    this.pagesubmit = true;
    if (this.myform.invalid) {
      // return if form validation failed    
      return false;
    }
    else {
      var url = "http://localhost:3000/employees";
      this.httpobj.get(url).subscribe(response => {
        // additional validation for duplicate email
        var serverdata: any[] = response as string[];
        for (var i: number = 0; i < serverdata.length; i++) {
          if (this.myform.get('email').value == serverdata[i].email) {
            this.errormsg = "Employee with this email already exists";
            return false;
          }
        }
        // prepare data for backend
        var data = {
          "ename": this.myform.get('ename').value,
          "mobile": this.myform.get('mobile').value,
          "email": this.myform.get('email').value,
          "gender": this.myform.get('gender').value,
          "address": this.myform.get('address').value,
          "technology": this.myform.get('technology').value,
          "age": this.myform.get('age').value,
          "dept": this.myform.get('dept').value,
        }
        // although we hide in UI, make sure we fix the data as well
        if (data.dept == "Finance") {
          data.technology = "N/A"
        }
        // pass data to backend
        this.httpobj.post(url, data).subscribe(response => {
          this.msg = "Employee added succesfully !";
          window.location.href = "/employeeinfo";
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

