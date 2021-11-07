import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsigEstudiante } from '../interfaces/asigEstudiante';
import { Curso } from '../interfaces/curso';


@Injectable({
  providedIn: 'root'
})
export class AsigEstudianteService {

  URL = "https://rest-api-parcial.herokuapp.com";
  constructor(private http : HttpClient) { }

  getAsignacion(): Observable<AsigEstudiante[]>{
    return this.http.get<AsigEstudiante[]>(this.URL+'/estudiante_curso')
  }

  getAsignacionIndividual(id :number): Observable<AsigEstudiante[]>{
    return this.http.get<AsigEstudiante[]>(this.URL+'/estudiante_curso/'+id)
  }

  deleteAsignacion(id :number){
    this.http.delete(this.URL+'/estudiante_curso/'+id).subscribe(
      res => console.log(res)
    )
  }

  agregarAsignacion(asigEstudiante: {}){
    this.http.post(this.URL+'/estudiante_curso/', asigEstudiante).subscribe(
      res => console.log(res)
    )
  }

  modificarAsignacion(id:number, asigEstudiante : {}){
    this.http.put(this.URL+'/estudiante_curso/'+id, asigEstudiante).subscribe(
      res => console.log(res)
    )
  }
}
