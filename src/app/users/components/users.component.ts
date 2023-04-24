import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/users/services/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { User } from 'src/app/core/models/users.model'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  users$!: Observable<User[]>

  ngOnInit(): void {
    // const page = Number(this.route.snapshot.queryParamMap.get('page'))
    // const currentPage = page ? page : 1
    // this.getUsers(currentPage)
    this.route.queryParams.subscribe((params: Params) => {
      this.getUsers(params['page'] ? params['page'] : 1)
    })
  }

  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page)
  }

  nextPageHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2

    // 1 variant
    // this.router.navigateByUrl(`/users?page=${nextPage}`).then(() => {
    //   this.getUsers(nextPage)
    // })

    // 2 variant
    this.router.navigate(['users'], {
      queryParams: {
        page: nextPage,
      },
    })
  }
}
