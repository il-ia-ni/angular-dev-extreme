import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }  // injected the Messages service as a public cls prop to allow binding it to the component's template. Angular ONLY binds to public component properties. See @https://v5.angular.io/tutorial/toh-pt4#show-messages

  ngOnInit(): void {
  }

}
