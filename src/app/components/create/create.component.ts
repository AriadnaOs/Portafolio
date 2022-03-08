import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';
import { Project } from '../../../models/projects';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;

  constructor(
    private _projectService: ProjectService
  ) { 
    this.title = "Create project";
    this.project = new Project('', '', '', '', 2022, '', '');
  }

  ngOnInit() {
  }

  onSubmit(form){
    
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.status ='success';
          form.reset(); // To empty the form after completed
        }else{
          this.status ='failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
