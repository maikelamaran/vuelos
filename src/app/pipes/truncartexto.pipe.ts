import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true
})
export class TruncarText implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if (value.length > maxLength) {
      const truncatedText = value.slice(0, maxLength);
      const remainingText = value.slice(maxLength);
      return truncatedText + '\n' + remainingText;
    }
    return value;
  }
}