import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(array: Array<any>, key: string, reverse: boolean): Array<any> {
    if (array !== undefined) {
      array.sort((a: any, b: any) => {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        } else {
          return 0;
        }
      });
      if (reverse) {
        array.reverse();
      }
    }
    return array;
  }

}
