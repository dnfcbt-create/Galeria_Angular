import { Component } from '@angular/core';
import { GaleriaComponent } from './galeria/galeria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Skate Spots España';
}
