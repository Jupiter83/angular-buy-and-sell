import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../Vehicle';
import { VEHICLES } from '../Fake-Backend';
import { Check } from '../Check';
//import { Check } from '../Check';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public readonly allVehicles$: Observable<Vehicle[]>;

  constructor(private http: HttpClient) {
    this.allVehicles$ = this.getAllVehicles();
  }


  getVehicles(): Observable<Vehicle[]> {
    return of(VEHICLES);
  }

  getAllVehicles(): Observable<Vehicle[]> {
    // return this.http.get('http://localhost:3000/api/vehicle/getVehicles').pipe(map(data => { })).subscribe(result => {
    //   console.log(result);
    // });
    return this.http.get<Vehicle[]>('http://localhost:3000/api/vehicle/getVehicles');

    //console.log(JSON.parse(result);

    //return result;
  }

  getCheck(): Observable<Check[]> {
    return this.http.get<Check[]>('http://localhost:3000/api/vehicle/getCheck');
  }
}
