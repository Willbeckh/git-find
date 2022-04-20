export class User {
  constructor(
    public bio: string,
    public public_repos: number,
    public login: string,
    public avatar_url: string,
    public created_at: Date,
    public updated_at: Date,
    public name: string,
    public full_name: string,
    public html_url: string
  ) {}
}
