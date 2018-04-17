import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmTimeTableTime'
})
export class TmTimeTableTimePipe implements PipeTransform {

  transform(time: Date, args?: any): any {
    return time.toLocaleTimeString();
  }

}
