import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { BaseComponent } from '../../core/base/base.component';
import { componentType } from 'src/app/core/utils/componentType';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  imports: [CommonModule, CustomButtonComponent],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomCardComponent   extends BaseComponent{
  
  componentType = componentType.card;

}
