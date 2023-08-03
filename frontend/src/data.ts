import {Food} from './app/shared/models/Food';

export const sample_foods: Food[]=[
    {
      id: '1',
      name: 'Pizza Margherita',
      price: 12.99,
      tags: ['Pizza', 'Italian'],
      favorite: false,
      stars: 4,
      imageUrl: 'assets/food-pizza_magherita.jpeg',
      origin: ['Italy'],
      cookTime: '30 minutes',
    },
    {
      id: '2',
      name: 'Burger Deluxe',
      price: 9.99,
      tags: ['Burger', 'American'],
      favorite: true,
      stars: 5,
      imageUrl: 'assets/food-burger_deluxe.jpeg',
      origin: ['USA'],
      cookTime: '20 minutes',
    },
    {
      id: '3',
      name: 'Sushi Combo',
      price: 18.50,
      tags: ['Sushi', 'Japanese'],
      favorite: false,
      stars: 4.5,
      imageUrl: 'assets/food-sushi_combo.jpeg',
      origin: ['Japan'],
      cookTime: '40 minutes',
    },
    {
        id: '4',
        name: 'Sarmale',
        price: 16.25,
        tags: ['Traditional', 'Romanian'],
        favorite: true,
        stars: 4.7,
        imageUrl: 'assets/food-sarmale.jpeg',
        origin: ['Romania'],
        cookTime: '2 hours',
      },
      {
        id: '5',
        name: 'Paine pe Vatră',
        price: 6.50,
        tags: ['Traditional', 'Romanian'],
        favorite: false,
        stars: 4.6,
        imageUrl: 'assets/food-paine_pe_vatra.jpeg',
        origin: ['Romania'],
        cookTime: '1 hour',
      },
      {
        id: '6',
        name: 'Ciorbă de Burtă',
        price: 13.75,
        tags: ['Soup', 'Traditional', 'Romanian'],
        favorite: false,
        stars: 4.3,
        imageUrl: 'assets/food-ciorba_de_burta.jpeg',
        origin: ['Romania'],
        cookTime: '1.5 hours',
      },
      {
        id: '7',
        name: 'Mici Combo',
        price: 11.00,
        tags: ['Grill', 'Traditional', 'Romanian'],
        favorite: true,
        stars: 4.8,
        imageUrl: 'assets/food-mici_combo.jpeg',
        origin: ['Romania'],
        cookTime: '30 minutes',
      },
    // Add more food items as needed
  ];

  