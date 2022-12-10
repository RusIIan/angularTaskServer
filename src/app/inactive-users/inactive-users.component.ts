import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent implements OnInit{
  constructor(private userService: UsersServiceService) { }
  users: string[] = [];
  ngOnInit(){
   this.users = this.userService.inactiveUsers 
}
  onSetToActive(id: number) {
    this.userService.addToActive(id);
  }
}
