import { Component } from '@angular/core';
import { FormArrayName, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent {

  public username: string = "";
  public password: string = "";
  public errorMessage: string = "";

  constructor(private router:Router) { }

  login(form:NgForm){

    if(form.valid){
      if(this.username == "admin" && this.password == "12345"){
        this.router.navigateByUrl('/admin/main');
      }

      else{
        this.errorMessage = "Hatalı username veya parola girdiniz!"
      }
    }
    else{
      this.errorMessage = "Lütfen formu eksiksiz doldurunuz!"
    }

  }
}
