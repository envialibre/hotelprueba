import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../types/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = 'http://localhost:3000/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  getHotel(id: number): Observable<Hotel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hotel>(url);
  }

  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    const url = `${this.apiUrl}/${hotel.id}`;
    return this.http.put<Hotel>(url, hotel);
  }

  deleteHotel(id: number): Observable<Hotel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Hotel>(url);
  }
}
