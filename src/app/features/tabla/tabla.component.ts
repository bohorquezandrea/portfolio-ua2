import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Item = {
  id: number;
  nombre: string;
  categoria: string;
  material: string;
  precio: number;
  stock: number;
  origen: string;
  rating: number;
};

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  showAlt = false;

  toggle(): void {
    this.showAlt = !this.showAlt;
  }

  trackById = (_: number, it: Item) => it.id;

  data: Item[] = [
    {
      id: 1,
      nombre: 'Collar Étoile',
      categoria: 'Collar',
      material: 'Oro 18k',
      precio: 4200,
      stock: 5,
      origen: 'Francia',
      rating: 4.8,
    },
    {
      id: 2,
      nombre: 'Anillo Lumière',
      categoria: 'Anillo',
      material: 'Platino',
      precio: 5600,
      stock: 3,
      origen: 'Italia',
      rating: 4.6,
    },
    {
      id: 3,
      nombre: 'Pulsera Ciel',
      categoria: 'Pulsera',
      material: 'Oro rosa',
      precio: 3100,
      stock: 8,
      origen: 'España',
      rating: 4.5,
    },
    {
      id: 4,
      nombre: 'Aretes Perla',
      categoria: 'Aretes',
      material: 'Perla/Au',
      precio: 2900,
      stock: 12,
      origen: 'Japón',
      rating: 4.7,
    },
    {
      id: 5,
      nombre: 'Broche Éclat',
      categoria: 'Broche',
      material: 'Oro blanco',
      precio: 3800,
      stock: 2,
      origen: 'Suiza',
      rating: 4.4,
    },
    {
      id: 6,
      nombre: 'Anillo Nuit',
      categoria: 'Anillo',
      material: 'Oro 18k',
      precio: 4700,
      stock: 4,
      origen: 'Francia',
      rating: 4.9,
    },
    {
      id: 7,
      nombre: 'Collar Lune',
      categoria: 'Collar',
      material: 'Platino',
      precio: 5200,
      stock: 6,
      origen: 'Italia',
      rating: 4.6,
    },
    {
      id: 8,
      nombre: 'Aretes Brisa',
      categoria: 'Aretes',
      material: 'Plata',
      precio: 900,
      stock: 20,
      origen: 'México',
      rating: 4.2,
    },
    {
      id: 9,
      nombre: 'Pulsera Mar',
      categoria: 'Pulsera',
      material: 'Oro rosa',
      precio: 2600,
      stock: 10,
      origen: 'Portugal',
      rating: 4.3,
    },
    {
      id: 10,
      nombre: 'Anillo Sol',
      categoria: 'Anillo',
      material: 'Oro blanco',
      precio: 3950,
      stock: 7,
      origen: 'Suiza',
      rating: 4.5,
    },
    {
      id: 11,
      nombre: 'Collar Aura',
      categoria: 'Collar',
      material: 'Oro 18k',
      precio: 4400,
      stock: 9,
      origen: 'Francia',
      rating: 4.7,
    },
    {
      id: 12,
      nombre: 'Aretes Nube',
      categoria: 'Aretes',
      material: 'Platino',
      precio: 5100,
      stock: 3,
      origen: 'Italia',
      rating: 4.6,
    },
    {
      id: 13,
      nombre: 'Pulsera Rayo',
      categoria: 'Pulsera',
      material: 'Oro blanco',
      precio: 3350,
      stock: 5,
      origen: 'Suiza',
      rating: 4.4,
    },
    {
      id: 14,
      nombre: 'Broche Flor',
      categoria: 'Broche',
      material: 'Plata',
      precio: 750,
      stock: 25,
      origen: 'México',
      rating: 4.1,
    },
    {
      id: 15,
      nombre: 'Anillo Brillo',
      categoria: 'Anillo',
      material: 'Oro rosa',
      precio: 2850,
      stock: 11,
      origen: 'España',
      rating: 4.3,
    },
  ];
}
