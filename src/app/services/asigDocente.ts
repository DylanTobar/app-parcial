import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsigDocente } from '../interfaces/asigDocente';



@Injectable({
  providedIn: 'root'
})
export class AsigDocenteService {

  URL = "https://rest-api-parcial.herokuapp.com";
  constructor(private http : HttpClient) { }

  getAsignacion(): Observable<AsigDocente[]>{
    return this.http.get<AsigDocente[]>(this.URL+'/curso_docente')
  }

  getAsignacionIndividual(id :number): Observable<AsigDocente[]>{
    return this.http.get<AsigDocente[]>(this.URL+'/curso_docente/'+id)
  }

  deleteAsignacion(id :number){
    this.http.delete(this.URL+'/curso_docente/'+id).subscribe(
      res => console.log(res)
    )
  }

  agregarAsignacion(asigDocente: {}){
    this.http.post(this.URL+'/curso_docente/', asigDocente).subscribe(
      res => console.log(res)
    )
  }

  modificarAsignacion(id:number, asigDocente : {}){
    this.http.put(this.URL+'/curso_docente/'+id, asigDocente).subscribe(
      res => console.log(res)
    )
  }
}
