import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite places';
  image1 = 'https://get.wallhere.com/photo/mountains-fall-colors-clouds-landscape-Colorado-fallcolor-sanjuans-Aspen-sanjuanmountains-southwestcolorado-coloradomountains-coloradolandscape-995177.jpg';
  image2 = 'https://visitutahkenticoprod.blob.core.windows.net/cmsroot/visitutah/media/site-assets/three-season-photography/mighty-5/zion/zion-national-park_the-narrows_istock.jpg';
  image3 = 'https://www.travelcaffeine.com/wp-content/uploads/2018/10/treasure-island-park-sunset-laguna-beach-california-522.jpg';

  constructor() { }

  ngOnInit() {
  }

}