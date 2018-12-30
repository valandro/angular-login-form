import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

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

  public onClick(event: Event) {
    this.data.authenticate().subscribe(
      res => { 
        console.log(res) 
      },
      err => { 
        console.log(err)
        this.failed$ = 'Usuário ou senha inválidos' 
      }
    )
  }

}
