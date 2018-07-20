import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

const BASE_URL = 'http://localhost:8080/user';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {
  }

  public getList() {
    return this._http.get(`${BASE_URL}s`);
  }

  public getUser(id: number) {
    return this._http.post(`${BASE_URL}/${id}`, null);
  }

  public createUser(user: User) {
    return this._http.post(`http://localhost:8080/add/user`, user);
  }

  public getRecomendations(userId: number) {
    return this._http.post(`http://localhost:8080/recomendation/${userId}`, null);
  }
}
