import { Injectable } from '@angular/core';

export interface Musical {
  title: string,
  numbers: string[]
}
const musicals: Musical[] = [
  {
    title: 'Wicked',
    numbers: [
      'No One Mourns The Wicked',
      'Dear Old Shiz',
      'The Wizard and I',
      'What is This Feeling?',
      'Something Bad',
      'Dancing Through Life',
      'Popular',
      'I\'m Not That Girl',
      'One Short Day',
      'A Sentimental Man',
      'Defying Gravity'
    ]
  },
  {
    title: 'Hamilton',
    numbers: [
      'Alexander Hamilton',
      'Aaron Burr, Sir',
      'My Shot',
      'The Story Of Tonight',
      'The Schuyler Sisters',
      'Farmer Refuted',
      'You\'ll Be Back',
      'Right Hand Man',
      'A Winter\'s Ball',
      'Helpless',
      'Satisfied',
      'The Story of Tonight (Reprise)',
      'Wait For It',
      'Stay Alive',
      'Ten Duel Commandments',
      'Meet Me Inside',
      'That Would Be Enough',
      'Guns and Ships',
      'History Has Its Eyes On You',
      'Yorktown (The World Turned Upside Down)',
      'What Comes Next',
      'Dear Theodosia',
      'Non-Stop'
    ]
  },
  {
    title: 'Cats',
    numbers: [
      'Overture',
      'Prologue: Jellicle Songs for Jellicle Cats',
      'The Naming of Cats',
      'The Invitation to the Jellicle Ball',
      'The Old Gumbie Cat',
      'The Rum Tum Tugger',
      'Grizabella: The Glamour Cat',
      'Bustopher Jones: The Cat About Town',
      'Mungojerrie and Rumpleteazer',
      'Old Deuteronomy',
      'The Awful Battle of The Pekes and the Pollicles',
      'The Song of the Jellicles',
      'The Jellicle Ball',
      'Grizabella, The Glamour Cat (Reprise)',
      'Memory (Prelude)'
    ]
  },
  {
    title: 'Phantom of the Opera',
    numbers: [
    'Think of Me',
    'Angel of Music',
    'The Phantom of the Opera',
    'Music of the Night',
    'Magical Lasso',
    'I Remember/Stranger Than You Dreamt It',
    'Prima Donna',
    'Poor Fool, He Makes Me Laugh',
    'All I Ask of You',
    'Wishing You Were Somehow Here Again',
    'Point of No Return'
    ]
  },
  {
    title: 'Mama Mia',
    numbers: [
      'Prologue: I Have a Dream',
      'Honey, Honey',
      'Money, Money, Money',
      'Thank You for the Music',
      'Mamma Mia!',
      'Chiquitita',
      'Dancing Queen',
      'Lay All Your Love on Me',
      'Super Trouper',
      'Gimme! Gimme! Gimme!',
      'The Name of the Game',
      'Voulez Vous'
    ]
  },
  {
    title: 'Funny Girl',
    numbers: [
      'If a Girl Isn\'t Pretty',
      'I\'m the Greatest Star',
      'Cornet Man',
      'Who Taught Her Everything?',
      'His Love Makes Me Beautiful',
      'I Want to Be Seen With You Tonight',
      'Henry Street',
      'People',
      'You Are Woman',
      'Don\'t Rain on My Parade',
      'Sadie, Sadie, Married Lady',
      'Find Yourself a Man',
      'Rat-Tat-Tat-Tat',
      'Who Are You Now?',
      'The Music That Makes Me Dance'
    ]
  }
]
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMusicals(): string[] {
    return musicals.map((musical) => musical.title)
  }

  getNumbers(musicalTitle: string) {
    const musical = musicals.find((musical) => musical.title === musicalTitle);
    return musical?.numbers;
  }
}
