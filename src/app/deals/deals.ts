import { Component } from '@angular/core';
import { Restraunt } from '../model/restrauntModel';

@Component({
  selector: 'app-deals',
  imports: [],
  templateUrl: './deals.html',
  styleUrl: './deals.css',
})

export class DealsComponent {
  // Initial active category
  activeCategory: string = 'Pizza & Fast food';

  // Mock Data (Replace with Service call later)
  allRestaurants: Restraunt[] = [
    { id: 1, name: 'Chef Burgers London', discount: '-40%', image: 'assets/burgers.jpg', category: 'Pizza & Fast food' },
    { id: 2, name: 'Grand Ai Cafe London', discount: '-20%', image: 'assets/cafe.jpg', category: 'Vegan' },
    { id: 3, name: 'Butterbrot Caf\'e London', discount: '-17%', image: 'assets/butterbrot.jpg', category: 'Pizza & Fast food' },
    { id: 4, name: 'Sushi Masters', discount: '-25%', image: 'assets/sushi.jpg', category: 'Sushi' },
    { id: 5, name: 'Green Garden', discount: '-15%', image: 'assets/vegan-bowl.jpg', category: 'Vegan' },
  ];

  // Logic to filter restaurants based on selection
  get filteredRestaurants() {
    return this.allRestaurants.filter(res => res.category === this.activeCategory);
  }

  // Method to update the UI
  setCategory(category: string): void {
    this.activeCategory = category;
  }
}