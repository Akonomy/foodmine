import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  cartQuantity=0;
  user!:User;
  
  constructor(
    
    private userService:UserService,
    private router: Router,
    ) {
   
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;

      
    })
   }

  ngOnInit(): void {
  }



  get isAuth(){
    return this.user.token;
  }
}
