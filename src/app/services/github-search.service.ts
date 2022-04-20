import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {
  // user!: User;
  // repository!: Repository;
  // constructor(private httpClient: HttpClient) {
  //   this.user = new User('', '', 0, '', '', new Date(), '');
  //   this.repository = new Repository(
  //     '',
  //     '',
  //     '',
  //     new Date(),
  //     '',
  //     '',
  //     new Date()
  //   );
  // }
  // // get user profile
  // getUserProfile(username: string) {
  //   interface ApiResponse {
  //     username: string;
  //     bio: string;
  //     repos: number;
  //     login: string;
  //     avatar_url: string;
  //     date_created: Date;
  //     profile_link: string;
  //   }
  //   let promise = new Promise<void>((resolve, reject) => {
  //     this.httpClient
  //       .get<ApiResponse>('https://api.github.com/users/' + username)
  //       .toPromise()
  //       .then(
  //         (response) => {
  //           this.user.username = response!.username;
  //           this.user.bio = response!.bio;
  //           this.user.login = response!.login;
  //           this.user.avatar_url = response!.avatar_url;
  //           this.user.date_created = response!.date_created;
  //           this.user.profile_link = response!.profile_link;
  //           resolve();
  //         },
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //     // this.httpClient.get<any>(
  //     //   'https://api.github.com/users/' + username + '/repos'
  //     // ).toPromise().then(response=>{});
  //   });
  //   return promise;
  // }

  // get user repositories
}
