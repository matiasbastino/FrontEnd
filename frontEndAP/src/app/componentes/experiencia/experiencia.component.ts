import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[];

  constructor(private sExperiencia: ExperienciaService) {  }
  ngOnInit(): void {
    this.cargarExperiencia();
    //if(this.tokenService.getToken()){

    //}
    throw new Error('Method not implemented.');
  }

    cargarExperiencia(): void{
      this.sExperiencia.lista().subscribe(data=> {this.experiencias=data});
    }
  }
 
