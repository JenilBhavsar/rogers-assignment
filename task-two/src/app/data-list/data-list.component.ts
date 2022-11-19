import { Component } from '@angular/core';
import apiData from '../data/data.json';
import { Item } from '../card/card.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  data: Item[] = apiData;
}
