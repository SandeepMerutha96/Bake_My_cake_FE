import { Component, OnInit } from '@angular/core'; 
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageList: Array<any> = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data=>{
      this.imageList = data;
      console.log()
    });
  }

  onSearchTextChanged(dishname: string) {
    this.imageService.getImages().subscribe({
      next: data => {
        if (dishname || dishname !== '') {
           this.imageList = data.filter(data => data?.category?.includes(dishname) || data?.caption?.includes(dishname) );
        }
        else
          this.imageList  = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }


}
