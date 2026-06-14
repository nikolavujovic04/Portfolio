export class Projects{
  id: number;
  name: string;
  description: string;
  github_url: string;

  constructor(id: number, name:string, description: string, github_url: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.github_url = github_url;
  }
}