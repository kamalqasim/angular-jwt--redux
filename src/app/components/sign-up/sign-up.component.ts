import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() : void{
    console.log(this.user);
  }

}
