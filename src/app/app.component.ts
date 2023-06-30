import { Component } from '@angular/core';
import { a, dt1, dt2, dt3, dt4, request ,response } from './data';
import { Observable, map,pluck, tap } from 'rxjs';
import { movie } from './movie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '30-06-2023';

  // this is syntax we to follow for suscribe the observable function.
  // it is asynchronous function.
  dt3 = new Observable((observer) => {
    observer.next(dt3);
  });
  dt1 = new Observable((obs) => {
    obs.next(dt1);
  });
  response = new Observable((ob)=>{
    ob.next(response)
  })
  constructor() {
  }
  ngOnInit() {
    this.dt3.subscribe((val: any) => console.log(val));
    // we can directly do it
    // it will be synchronous
    console.log(request);
    this.dt1.subscribe((val) => {
      // deal with it!
      console.log(val);
    });

    // modifiying the data stream using the pipe 
    this.response
  .pipe(
    // we can modifiy the data using map and pluck.
    // map((data:any) => data.data1)

    // pluck('data1') just using the key word for the data that should be showed or passed to the subscribe


    // we cannnot modified the data in tap.

    // tap((r:any)=>r.data1)
  )
  .subscribe(data => {
    console.log(data);
  });

  //  we can use 'of' as a observable in the data
a.subscribe((data)=>{
  console.log(data)});
  }
fun(movie:movie){
  // this is model where we can use and remember the names.
  console.log(movie.Title );
  console.log(movie.year );
  console.log(movie.stars );
  console.log(movie.rating) ;
  console.log(movie.onSale) ;
}

}
