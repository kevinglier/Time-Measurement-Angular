import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmTimeTableDuration'
})
export class TmTimeTableDurationPipe implements PipeTransform {

  transform(duration: number, args?: any): any {
    /*const h = parseInt((duration / 60 / 60) + '', 10);

    const s = duration % 60;
    duration -= s;
    const m = duration % 60;*/


    const h = Math.floor(duration / (60 * 60));
    duration -= h * 60 * 60;
    const m = Math.floor(duration / 60);
    duration -= m * 60;
    const s = Math.floor(duration);

    return (h ? h + 'h' : '') + (m ? m + 'm' : '') + s + 's';
  }

}
