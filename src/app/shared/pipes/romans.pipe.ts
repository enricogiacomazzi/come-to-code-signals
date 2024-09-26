import { Pipe, PipeTransform } from '@angular/core';
import * as romans from 'romans';

@Pipe({
  name: 'romans',
  standalone: true
})
export class RomansPipe implements PipeTransform {

  transform(value: number): string {
    return (!value || value <= 0) ? '' : romans.romanize(value);
  }

}
