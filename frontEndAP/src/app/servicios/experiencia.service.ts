import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'http://localhost:4200/experiencia/'
  constructor(private httpClient:HttpClient) { }

  public lista (): Observable <Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

public getById(id:number): Observable <Experiencia[]> {
  return this.httpClient.get<Experiencia[]>(this.url + 'detail/${id}');
  }

  public save(experiencia: Experiencia): Observable <any> {
    return this.httpClient.post<any>(this.url + 'create', experiencia);
    }

    public update(experiencia: Experiencia): Observable <any> {
      return this.httpClient.put<any>(this.url + 'update', experiencia);
      }

      public delete(id:number): Observable <any> {
        return this.httpClient.delete<any>(this.url + 'delete/${id}');
        }
}