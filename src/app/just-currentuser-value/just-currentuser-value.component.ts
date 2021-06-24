import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-just-currentuser-value',
  templateUrl: './just-currentuser-value.component.html',
  styleUrls: ['./just-currentuser-value.component.scss']
})
export class JustCurrentuserValueComponent implements OnInit {
  currentUser: User
  constructor(
    private userService: UserService
  ) {
    this.currentUser = this.userService.currentUserValue
  }

  ngOnInit(): void {
  }

}
