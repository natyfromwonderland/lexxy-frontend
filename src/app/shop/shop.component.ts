import { DisplayItem } from './../models/learning.models';
import { ShopItemService } from './../services/shop-item.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PupilService } from '../services/pupil.service';
import { ShopItem } from '../models/shop-item.models';
import { Pupil } from '../models/pupil.models';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {

  pupil$!: Pupil;
  item1!: ShopItem;
  item2!: ShopItem;
  item3!: ShopItem;
  img:any;
  isImageLoading: boolean = false;
  url1: string = "../../assets/shop-img/cosmic.svg";
  url2: string = "../../assets/shop-img/headphones.svg";
  url3: string = "../../assets/shop-img/girly.svg";

  constructor(private elementRef: ElementRef, private pupilService: PupilService, 
    private shopService: ShopItemService, private router: Router, private imageService: AvatarService) { }

  ngOnInit(): void {
    
    this.pupilService.getPupilByUsername(JSON.parse(localStorage.getItem('profile')!).email).subscribe(
      (data) => {
        this.pupil$=data;
        this.pupil$.email=data.email;
      });
      this.shopService.getItemById(1).subscribe(
        result => {
          this.item1=result;
          this.item1.name=result.name;
          this.item1.id = result.id;
          this.item1.price = result.price;
        }
      );
      this.shopService.getItemById(2).subscribe(
        result => {
          this.item2=result;
          this.item2.name=result.name;
          this.item2.id = result.id;
          this.item2.price = result.price;
        }
      );
      this.shopService.getItemById(3).subscribe(
        result => {
          this.item3=result;
          this.item3.name=result.name;
          this.item3.id = result.id;
          this.item3.price = result.price;
        }
      );

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("assets/backgrounds/bg-dark.png")';
  }

  buyItem(name: string, itemId: number){
    this.imageService.uploadImage(name,  this.pupil$.email).subscribe();
    this.pupilService.deductCoins(this.pupil$.email, itemId).subscribe();
  }


}
