import { Component, OnInit } from '@angular/core'
import { User, UsersService } from 'src/app/services/users.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users$!: Observable<User[]>

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers()
  }
}
