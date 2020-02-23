import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
selector: 'app-contact',
templateUrl: './contact.component.html',
styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
 @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

 ai = {
  address: '524 W 5th Ave, Naperville, IL 60563',
  email: 'afferentInfluence@gmail.com',
  phone: '(630) 332-0138'
 };

 center = {lat: 41.780555, lng: -88.157470 };
 markerOptions = {draggable: false};
 markers = [];
 zoom = 18;
 display = {lat: 41.780555, lng: -88.157470 };

 constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  this.matIconRegistry.addSvgIcon(
   'logo',
   this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/logo.svg')
  );
  this.matIconRegistry.addSvgIcon(
   'facebook',
   this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/facebook.svg')
  );
  this.matIconRegistry.addSvgIcon(
   'youtube',
   this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/youtube.svg')
  );
  this.matIconRegistry.addSvgIcon(
   'instagram',
   this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/instagram.svg')
  );
  this.matIconRegistry.addSvgIcon(
   'twitter',
   this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/twitter.svg')
  );
 }

 ngOnInit() {
  this.addMarker();
 }

 addMarker() {
  this.markers.push({
   position: {
    lat: this.center.lat,
    lng: this.center.lng
   },
   title: 'Afferent Influence'
 });
 }
}
