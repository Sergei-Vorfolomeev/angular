import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProfileService } from 'src/app/profile/services/profile.service'
import { Observable } from 'rxjs'
import { ProfileResponse } from 'src/app/core/models/profile.model'

@Component({
  selector: 'inst-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}

  userId = Number(this.route.snapshot.paramMap.get('userId'))
  profile$!: Observable<ProfileResponse>

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile(this.userId)
  }

  backToUsersHandler() {
    this.router.navigate(['/users'])
  }
}
