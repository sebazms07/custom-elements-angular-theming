import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CustomButtonComponent } from './app/components/custom-button/custom-button.component';
import { CustomCardComponent } from './app/components/custom-card/custom-card.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

(async () => {
  const app = await createApplication({
    providers: [],
  });
  const buttonCustomElement = createCustomElement(CustomButtonComponent, {
    injector: app.injector,
  });
  customElements.define('custom-b-btn', buttonCustomElement);
  const cardCustomElement = createCustomElement(CustomCardComponent, {
    injector: app.injector,
  });
  customElements.define('custom-b-card', cardCustomElement);
})();


//crear enum para sectorizar atomic design de cada componente, 
//agregar eventos y variantes en los diseños