import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ProviderComponent } from './provider/provider.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ProviderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
}
