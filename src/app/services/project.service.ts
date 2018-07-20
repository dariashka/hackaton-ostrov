import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from '../models/project.model';

const BASE_URL = 'http://localhost:8080/project';

@Injectable()
export class ProjectService {
  constructor(private _http: HttpClient) {
  }

  public getList() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');

    return this._http.get(BASE_URL + 's', {headers});
  }

  public createProject(project?: Project) {
    return this._http.post(BASE_URL + 's/add', JSON.stringify(project));
  }

  public getProject(id: number) {
    return this._http.post(BASE_URL + '/' + id, null);
  }

  public join(projectId: number, roleId: number) {
    return this._http.post(BASE_URL + '/' + projectId + '/' + 'join' + '/' + roleId, JSON.stringify({id: 1})); // id user
  }

  public getProjectsByTemplate(templateId: number) {
    return this._http.post(BASE_URL + 's/template/' + templateId, null);
  }
}
