import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardItem= {
    title:"Frontend Utvecklare",
    name:"Aydin Aslan",
    phone:"070 479 87 94",
    email:"aydinser@hotmail.com",
    adress:"Kungsholmen, Stockholm"
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
