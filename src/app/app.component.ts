import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSub = "Advanced";
  @ViewChild("register") register: NgForm;

  onSubmit() {
    console.log(this.register.value);
  }
}
