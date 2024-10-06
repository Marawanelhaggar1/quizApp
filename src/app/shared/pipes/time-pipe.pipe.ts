import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
})
export class TimePipePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    const hourString = hours > 0 ? String(hours).padStart(2, '0') : '';
    const minutesString = String(minutes).padStart(2, '0');
    const secondString = String(seconds).padStart(2, '0');
    return `${hourString}${minutesString}:${secondString}`;
  }
}
