import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    new Service('Name', 'description', '1.png', 2300, 1800),
    new Service('Name', 'description', '1.png', 2300, 1800),
    new Service('Name', 'description', '1.png', 2300, 1800)
  ];
  constructor() { }

  ngOnInit() {
  }

}
