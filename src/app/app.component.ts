import { Component } from '@angular/core';
import mockData from './mock-data.json';
import { CommonModule } from '@angular/common';

interface Item {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true

})
export class AppComponent {
  items: Item[] = [];
  dataLoaded = false;

  loadData() {
    this.items = mockData;
    this.dataLoaded = true;
  }
}
