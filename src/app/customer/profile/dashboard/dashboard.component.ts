import {Component} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {Project} from '../../../models/project.model';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html'
})
export class UserDashboardComponent {
  public isLoading = false;
  public projects: Array<Project> = [];
  public displayedColumns: string[] = ['role', 'project', 'action'];


  constructor(private _projectService: ProjectService,
              private _snackbar: MatSnackBar,
              private _userService: UserService) {
    const myUserId = 1;
    this._userService.getRecomendations(myUserId).subscribe(result => {
      this.projects = result['projects'];
    });
  }

  public join(projectId: number, roleId: number) {
    this._projectService.join(projectId, roleId).subscribe(() => {
      this._snackbar.open('Ура, ваш отклик отправлен автору проекта.', '', {duration: 1000});
    }, error => {
      this._snackbar.open('Упс, произошла ошибка, попробуйте еще раз!', '', {duration: 1000});
    });

  }
}
