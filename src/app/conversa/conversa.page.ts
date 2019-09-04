import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.page.html',
  styleUrls: ['./conversa.page.scss']
})
export class ConversaPage implements OnInit {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {}
}
