import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  text: String;
  constructor() { }

  ngOnInit() {
    var name = 'Vikram';
    var greet = 'Wassup Guys!';
    this.text = `Hey Guys...this is a dynamic text
    ....Its ${name} saying ${greet}....`;
    console.log(this.text);
  }

}
