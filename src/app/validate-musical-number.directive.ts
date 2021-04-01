import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { DataService } from './data.service';

@Directive({
  selector: '[validateMusicalNumber]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateMusicalNumberDirective,
    multi: true
  }]
})
export class ValidateMusicalNumberDirective implements Validator{
  @Input('validateMusicalNumber') validateMusicalNumber: string = '';

  constructor(private musicalService: DataService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
      if (this.validateMusicalNumber !== '') {
        const isInMusical = this.musicalService.getNumbers(this.validateMusicalNumber)?.includes(control.value);
        return isInMusical ? null: {wrongNumber: {value: control.value}}
      }
      else {
        return null
      }
  }
}
