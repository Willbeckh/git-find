import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  username!: string;
  userDetail: any;
  repoData!: any;

  constructor(
    private active: ActivatedRoute,
    private githubService: GithubService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.params.subscribe((params) => {
      this.username = params['id'];
      console.log('parameter', this.username);
    });

    // get user details
    this.githubService.getUser(this.username).then((data) => {
      this.userDetail = data;
      console.log('userDetail', typeof this.userDetail);
    });

    // gets the repos of the user
    this.githubService.getRepos(this.username).then((data) => {
      this.repoData = data;
      console.log('repoData', this.repoData);
    });
  }
}
