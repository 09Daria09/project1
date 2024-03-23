import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  names: string[] = ['Матрица', 'Elektron', 'Sofportal', 'VELLOPT'];

  constructor() { }

  ngOnInit() {
  }
}
