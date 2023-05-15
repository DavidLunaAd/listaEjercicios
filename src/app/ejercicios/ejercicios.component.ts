import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios!: Ejercicio[];
  ejercicioSeleccionado!:Ejercicio;

  constructor(private ejercicioService:EjercicioService) {
   }

   getEjercicios():void{
    this.ejercicioService.getEjercicio().subscribe(ejercicios=>this.ejercicios=ejercicios);
   }

  ngOnInit(): void {
    this.getEjercicios();
   }

  onSelectedEjercicio(ejercicio:Ejercicio):void{
    console.log("Ejercicio seleccionado= "+ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
