import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {NgForm} from '@angular/forms'
import { User } from 'src/app/models/user';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loginUser(form: NgForm){
    console.log(form.value)
    //this.userService.selectedUser = User
    this.userService.postUser(form.value)
    .subscribe(res =>{
      this.userService.users = res as User[]
      console.log(res);
    });

    /*if(form.value.name === "David" && form.value.pasword =="david")
    {
      console.log("Bienvenido")

    }*/
   
  }

}
