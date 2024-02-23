import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get("assets/data/data.json");
  }
  addUser(data:any){
    return this.http.post("assets/data/data.json",data);
  }
}
