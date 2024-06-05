import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { SuccessToastComponent } from "./components/success-toast/success-toast.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, ContactFormComponent, SuccessToastComponent]
})
export class AppComponent {
  
}
