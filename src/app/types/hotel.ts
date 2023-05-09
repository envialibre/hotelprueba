export interface Hotel {
    id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    rooms: Room[];
  }
  
  export interface Room {
    id: number;
    name: string;
    description: string;
    price: number;
    capacity: number;
    bookings: Booking[];
  }
  
  export interface Booking {
    id: number;
    customerName: string;
    startDate: string;
    endDate: string;
    room: Room;
  }
  