import { EstudianteComponent } from './private/ComponenteEstudiante/estudiante/estudiante.component';
import { DocenteComponent } from './private/ComponenteDocente/docente/docente.component';
import { TbPersonaComponent } from './private/ComponentePersona/tabla-persona/tb-persona.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './private/ComponentePersona/personas/personas.component';
import { TbDocenteComponent } from './private/ComponenteDocente/tabla-docente/tb-docente.component';
import { TbEstudianteComponent } from './private/ComponenteEstudiante/tabla-estudiante/tb-estudiante.component';
import { LoginComponent } from './public/login/login.component';
import { CursoComponent } from './private/T_Cursos/curso/curso.component';
import { TbCursoComponent } from './private/T_Cursos/tb-curso/tb-curso.component';
import { TbAsigEstudianteComponent } from './private/T_Asig_Estudiante/tb-asig-estudiante/tb-asig-estudiante.component';
import { AsigEstudianteComponent } from './private/T_Asig_Estudiante/asig-estudiante/asig-estudiante.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  //Tablas
  { path: 'docentes', component: TbDocenteComponent},
  { path: 'personas', component: TbPersonaComponent },
  { path: 'estudiantes', component: TbEstudianteComponent},
  { path: 'cursos', component: TbCursoComponent},
  { path: 'asigEstudiantes', component: TbAsigEstudianteComponent},
  // Ingreso de Datos
  { path: 'addpersona', component: PersonasComponent},
  { path: 'adddocente', component: DocenteComponent },
  { path: 'addestudiante', component: EstudianteComponent},
  { path: 'addcurso', component: CursoComponent},
  { path: 'addasigEstudiante', component: AsigEstudianteComponent },
  // Modificacion de Datos
  { path: 'addpersona/:id', component: PersonasComponent },
  { path: 'adddocente/:id', component: DocenteComponent },
  { path: 'addestudiante/:id', component: EstudianteComponent},
  { path: 'addcurso/:id', component: CursoComponent},
  { path: 'addasigEstudiante/:id', component: AsigEstudianteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
