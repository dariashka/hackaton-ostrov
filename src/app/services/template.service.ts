import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Template} from '../models/template.model';

const BASE_URL = 'http://localhost:8080/template';

@Injectable()
export class TemplateService {
  constructor(private _http: HttpClient) {
  }

  public getList() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');

    return this._http.post(BASE_URL + 's', null, {headers});
  }

  public createTemplate(template?: Template) {
    return this._http.post(BASE_URL + 's/add', JSON.stringify(template));
  }

  public getTemplate(id: number) {
    return this._http.get(BASE_URL + '/' + id);

  }
}
