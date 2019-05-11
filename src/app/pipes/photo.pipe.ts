import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo',
  pure: false
})
export class PhotoPipe implements PipeTransform {

  transform(value: string, size?: number): any {
    size = size || 32;
    return value ? value : `https://png.icons8.com/cotton/gender-neutral-user/${size}`
  }

}
