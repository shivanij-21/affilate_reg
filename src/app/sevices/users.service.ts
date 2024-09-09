import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const SHARING_MAP = 'sharing_map';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }
  postB2cID(body: any) {
    return this.httpClient.post(`https://api2.streamingtv.fun:3481/post-b2cID`, body);
  }
  getAllB2cIDs() {
    return this.httpClient.get(`https://api2.streamingtv.fun:3481/get-all-b2cIDs`);
  }
  deleteB2cID(id: any){
    return this.httpClient.delete(`https://api2.streamingtv.fun:3481/delete-b2cID/${id}`);
  }
  getB2cIDByUsername(username:any){
    return this.httpClient.get(`https://api2.streamingtv.fun:3481/getB2cIDByUsername/${username}`);
  }

  register(data:any){
    return this.httpClient.post(`https://222222.digital/pad=81/registerAgent`, data);
  }
}
