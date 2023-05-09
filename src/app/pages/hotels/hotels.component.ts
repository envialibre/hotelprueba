import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../types/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[] = [];
  hotel: Hotel =  {
  id: 0,
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  rooms: []
  };

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
    this.getHotel();
  }

  getHotels(): void {
    this.hotelService.getHotels()
      .subscribe(hotels => this.hotels = hotels);
      console.log('hotels'+JSON.stringify(this.hotels));
  }

  getHotel(): void {
    this.hotelService.getHotel(1)
      .subscribe(hotel => this.hotel = hotel);
      console.log('hotel'+JSON.stringify(this.hotel));
  }

}
