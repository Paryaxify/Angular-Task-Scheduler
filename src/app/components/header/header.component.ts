import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	title : string = "Task Tracker"
	showAddTask : boolean
	subscription : Subscription

	constructor(private uiService : UiService){}

	ToggleAddTask(){
		this.uiService.toggleAddTask()
		console.log("Hello from parent header");
	}
}
