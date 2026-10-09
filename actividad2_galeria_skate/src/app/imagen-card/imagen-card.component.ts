import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ImagenGaleria {
  titulo: string;
  ciudad: string;
  zona: string;
  descripcion: string;
  url: string;
  fuente: string;
  autor: string;
}

@Component({
  selector: 'app-imagen-card',
  standalone: true,
  templateUrl: './imagen-card.component.html',
  styleUrl: './imagen-card.component.css'
})
export class ImagenCardComponent {
  // La imagen llega desde el componente de la galería.
  @Input({ required: true }) imagen!: ImagenGaleria;

  // Avisamos a la galería cuando el usuario pulsa una tarjeta.
  @Output() seleccionar = new EventEmitter<ImagenGaleria>();

  abrirImagen(): void {
    this.seleccionar.emit(this.imagen);
  }
}
