import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  auth$: Object;
  failed$: String;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.failed$ = ''
  }

  public onSubmit(form: NgForm) {
    this.auth$ = form.value
    this.data.authenticate(this.auth$).subscribe(
      res => {
        this.failed$ = ''
        console.log(res) 
      },
      err => { 
        console.log(err)
        this.failed$ = 'Usuário ou senha inválidos' 
      }
    )
  }

}
