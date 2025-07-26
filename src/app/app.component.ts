import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from "./Componentes/pagina-principal/pagina-principal.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavbarComponent } from "./Componentes/navbar/navbar.component";
import { FooterComponent } from "./Componentes/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SlickCarouselModule, NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EncuentraTuMascota';
}
