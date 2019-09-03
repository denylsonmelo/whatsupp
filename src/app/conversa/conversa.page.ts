import { Component, OnInit } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "app-conversa",
  templateUrl: "./conversa.page.html",
  styleUrls: ["./conversa.page.scss"]
})
export class ConversaPage implements OnInit {
  constructor(private navParams: NavParams) {
    console.log(this.navParams.get('id'));
  }

  ngOnInit() {}
}
