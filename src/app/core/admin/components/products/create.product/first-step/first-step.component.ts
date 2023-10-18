import { Component, Input } from '@angular/core';
import { DataModel } from '../../../models/forms.model';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent {
  @Input() firstData!: DataModel[];
}
