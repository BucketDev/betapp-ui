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
        uri = `https://png.icons8.com/color/${size}/earth-planet.png`
        break;
      case TournamentPrivacy.PRIVATE:
        uri = `https://png.icons8.com/color/${size}/unlock-2.png`
        break;
      case TournamentPrivacy.SECRET:
        uri = `https://png.icons8.com/color/${size}/lock-2.png`
        break;
    }
    return uri;
  }

}
