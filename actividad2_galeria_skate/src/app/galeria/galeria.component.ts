import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImagenCardComponent, ImagenGaleria } from '../imagen-card/imagen-card.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, ImagenCardComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  filtroActual = 'Todas';
  imagenSeleccionada: ImagenGaleria | null = null;

  // Las imágenes se cargan desde este array y no están escritas una a una en el HTML.
  imagenes: ImagenGaleria[] = [
    {
      titulo: 'Parque Lineal del Manzanares',
      ciudad: 'Madrid',
      zona: 'Madrid',
      descripcion: 'Una zona de skate fotografiada durante una tarde de lluvia.',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Pista_de_Skate_-_Parque_Lineal_del_Manzanares_-_Section_II_-_Madrid_01.jpg/960px-Pista_de_Skate_-_Parque_Lineal_del_Manzanares_-_Section_II_-_Madrid_01.jpg',
      fuente: 'https://commons.wikimedia.org/wiki/File:Pista_de_Skate_-_Parque_Lineal_del_Manzanares_-_Section_II_-_Madrid_01.jpg',
      autor: 'Javier Perez Montes'
    },
    {
      titulo: 'Parque de Las Cruces',
      ciudad: 'Madrid',
      zona: 'Madrid',
      descripcion: 'Skatepark integrado en una zona verde del barrio de Carabanchel.',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Skatepark_del_Parque_de_Las_Cruces.jpg/960px-Skatepark_del_Parque_de_Las_Cruces.jpg',
      fuente: 'https://commons.wikimedia.org/wiki/File:Skatepark_del_Parque_de_Las_Cruces.jpg',
      autor: 'Mar Collado'
    },
    {
      titulo: 'Mar Bella',
      ciudad: 'Barcelona',
      zona: 'Barcelona',
      descripcion: 'Un skatepark de hormigón situado cerca del litoral de Barcelona.',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Skatepark_Mar_Bella_%28Barcelona%29_2023.JPG/960px-Skatepark_Mar_Bella_%28Barcelona%29_2023.JPG',
      fuente: 'https://commons.wikimedia.org/wiki/File:Skatepark_Mar_Bella_(Barcelona)_2023.JPG',
      autor: 'Benoît Prieur'
    },
    {
      titulo: 'Skatepark de Valencia',
      ciudad: 'Valencia',
      zona: 'Otras',
      descripcion: 'Una imagen clásica de un skatepark urbano con bastante actividad.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Skatepark_Valencia_Spain.jpg',
      fuente: 'https://commons.wikimedia.org/wiki/File:Skatepark_Valencia_Spain.jpg',
      autor: 'Wikimedia Commons'
    },
    {
      titulo: 'Parque de Los Pericones',
      ciudad: 'Gijón',
      zona: 'Otras',
      descripcion: 'Zona abierta con rampas y obstáculos dentro del parque de Los Pericones.',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Skatepark_en_el_parque_de_los_Pericones%2C_en_Gij%C3%B3n_%28Asturias%29.jpg/960px-Skatepark_en_el_parque_de_los_Pericones%2C_en_Gij%C3%B3n_%28Asturias%29.jpg',
      fuente: 'https://commons.wikimedia.org/wiki/File:Skatepark_en_el_parque_de_los_Pericones,_en_Gij%C3%B3n_(Asturias).jpg',
      autor: 'Hmvg'
    },
    {
      titulo: 'Plaza de Armas',
      ciudad: 'Sevilla',
      zona: 'Otras',
      descripcion: 'Una zona de skate de Sevilla con bowls, curvas y bastante presencia de graffiti.',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Skatepark_Sevilla.jpg/960px-Skatepark_Sevilla.jpg',
      fuente: 'https://commons.wikimedia.org/wiki/File:Skatepark_Sevilla.jpg',
      autor: 'CarlosVdeHabsburgo'
    }
  ];

  // Devuelve solo las imágenes que coinciden con el filtro seleccionado.
  get imagenesFiltradas(): ImagenGaleria[] {
    if (this.filtroActual === 'Todas') {
      return this.imagenes;
    }

    return this.imagenes.filter((imagen) => imagen.zona === this.filtroActual);
  }

  cambiarFiltro(filtro: string): void {
    this.filtroActual = filtro;
  }

  abrirImagen(imagen: ImagenGaleria): void {
    this.imagenSeleccionada = imagen;
  }

  cerrarImagen(): void {
    this.imagenSeleccionada = null;
  }
}
