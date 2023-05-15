import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() ejercicio!:Ejercicio;

  constructor() { }

  ngOnInit(): void {
  }

}
