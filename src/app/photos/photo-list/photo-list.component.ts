import { Component,  } from '@angular/core';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {

  photos: Object[] = [];

  constructor(photoService : PhotoService){
    
    photoService.listFromUser('flavio').subscribe(photos => { 
      console.log(photos[0].description)
      this.photos = photos 
    
    });

  }

}
