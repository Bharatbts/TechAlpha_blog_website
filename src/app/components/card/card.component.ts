import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() slug!: string;
  @Input() image!: string;
  @Input() date!: string;
  @Input() title!: string;
  @Input() summary!: string;
  @Input() authorImage!: string;
  @Input() authorName!: string;

  ngOnInit(): void {
    this.date = new Date(this.date).toISOString().split('T')[0]
  }

}
