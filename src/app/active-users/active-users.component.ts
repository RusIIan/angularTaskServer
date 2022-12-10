import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent implements OnInit {
  constructor(private userService: UsersServiceService){}
  
  ngOnInit(){
    this.users = this.userService.activeUsers;
  }

  users: string[] = [];
  
  onSetToInactive(id: number) {
  this.userService.addToInactive(id)
  }
}
