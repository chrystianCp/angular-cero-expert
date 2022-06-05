import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl:'heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  nombre: string = 'Ironman';
  edad: number = 45;

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }
  get capitalizarNombre():string{
    return this.nombre.toLocaleUpperCase();
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }
  cambiarEdad():void{
    this.edad = 32;
  }

}
