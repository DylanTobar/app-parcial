import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav_bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PersonasComponent } from './private/ComponentePersona/personas/personas.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EstudianteComponent } from './private/ComponenteEstudiante/estudiante/estudiante.component';
import { DocenteComponent } from './private/ComponenteDocente/docente/docente.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TbPersonaComponent } from './private/ComponentePersona/tabla-persona/tb-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { TbEstudianteComponent } from './private/ComponenteEstudiante/tabla-estudiante/tb-estudiante.component';
import { TbDocenteComponent } from './private/ComponenteDocente/tabla-docente/tb-docente.component';
import { RouterModule} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './public/login/login.component';
import { AsigEstudianteComponent } from './private/T_Asig_Estudiante/asig-estudiante/asig-estudiante.component';
import { CursoComponent } from './private/T_Cursos/curso/curso.component';
import { TbAsigEstudianteComponent } from './private/T_Asig_Estudiante/tb-asig-estudiante/tb-asig-estudiante.component';
import { TbCursoComponent } from './private/T_Cursos/tb-curso/tb-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PersonasComponent,
    EstudianteComponent,
    DocenteComponent,
    PersonasComponent,
    TbPersonaComponent,
    TbEstudianteComponent,
    TbDocenteComponent,
    LoginComponent,
    CursoComponent,
    TbCursoComponent,
    AsigEstudianteComponent,
    TbAsigEstudianteComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
