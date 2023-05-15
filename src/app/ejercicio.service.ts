import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EJERCICIOS } from './collection';
import { Ejercicio } from './ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicio(): Observable <Ejercicio[]>{
    return of(EJERCICIOS);
  }
}
