import { Component } from '@angular/core';
import { Movies } from './Movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter!: string;
  searchResults!:string;
  movies: Movies[] =[
    {
      "Title": "Avatar",
      "Year": "2009",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Director": "James Cameron",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Images": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    },
    {
      "Title": "I Am Legend",
      "Year": "2007",
      "Released": "14 Dec 2007",
      "Runtime": "101 min",
      "Director": "Francis Lawrence",
      "Awards": "9 wins & 21 nominations.",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg"
      
    },
    {
      "Title": "300",
      "Year": "2006",
      "Released": "09 Mar 2007",
      "Runtime": "117 min",
      "Director": "Zack Snyder",
      "Awards": "16 wins & 42 nominations.",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    },
    {
      "Title": "The Avengers",
      "Year": "2012",
      "Released": "04 May 2012",
      "Runtime": "143 min",
      "Director": "Joss Whedon",
      "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
       "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
       
    },
   ];
}
