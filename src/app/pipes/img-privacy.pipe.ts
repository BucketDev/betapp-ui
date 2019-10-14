import { Pipe, PipeTransform } from '@angular/core';
import { TournamentPrivacy } from '../interfaces/types/tournament-privacy.enum';

@Pipe({
  name: 'imgPrivacy'
})
export class ImgPrivacyPipe implements PipeTransform {

  transform(value: TournamentPrivacy, size?: number): any {
    size = size || 24;
    let uri = "";
    switch(value) {
      case TournamentPrivacy.PUBLIC:
        uri = `https://png.icons8.com/color/earth-planet/${size}`
        break;
      case TournamentPrivacy.PRIVATE:
        uri = `https://png.icons8.com/color/unlock-2/${size}`
        break;
      case TournamentPrivacy.SECRET:
        uri = `https://png.icons8.com/color/lock-2/${size}`
        break;
    }
    return uri;
  }

}
