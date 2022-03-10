import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/projects';
import { ProjectService } from '../../../service/project.service';
import { UploadService } from '../../../service/upload.service';
import { Global } from '../../../service/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    this.title = "Create project";
    this.project = new Project('', '', '', '', 2022, '', '');
  }

  ngOnInit() {
  }

  onSubmit(form){
    
    // Save data
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
         
          // Upload image
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
          .then((result:any) =>{

            this.save_project = response.project;

            this.status ='success';
            form.reset(); // To empty the form after completed
          });
          
        }else{
          this.status ='failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
