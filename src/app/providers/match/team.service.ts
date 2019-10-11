import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Team } from '../../interfaces/match/team.interface';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private collectionConfederations = "confederations";
  private collectionCountries = "countries";
  private collectionLeagues = "leagues";
  private collectionTeams = "teams"

  constructor(private db: AngularFirestore) { }

  getConfederations = () => this.db.collection(this.collectionConfederations).get()
    .pipe(map((qs: QuerySnapshot<any>) =>
      qs.docs.map((value: QueryDocumentSnapshot<any>) => {
        let confederation = value.data();
        confederation['id'] = value.id;
        return confederation;
      })));

  getCountries = (confId: string) => this.db.collection(this.collectionConfederations).doc(confId)
    .collection(this.collectionCountries).get()
    .pipe(map((qs: QuerySnapshot<any>) =>
      qs.docs.map((value: QueryDocumentSnapshot<any>) => {
        let confederation = value.data();
        confederation['id'] = value.id;
        return confederation;
      })));

  getLeagues = (confId: string, countryId: string) => this.db.collection(this.collectionConfederations).doc(confId)
    .collection(this.collectionCountries).doc(countryId)
    .collection(this.collectionLeagues).get()
    .pipe(map((qs: QuerySnapshot<any>) =>
      qs.docs.map((value: QueryDocumentSnapshot<any>) => {
        let confederation = value.data();
        confederation['id'] = value.id;
        return confederation;
      })));

  getTeams = (confId: string, countryId: string, leagueId: string) => this.db.collection(this.collectionConfederations).doc(confId)
    .collection(this.collectionCountries).doc(countryId)
    .collection(this.collectionLeagues).doc(leagueId)
    .collection(this.collectionTeams).get()
    .pipe(map((qs: QuerySnapshot<any>) =>
      qs.docs.map((value: QueryDocumentSnapshot<any>) => {
        let confederation = value.data();
        confederation['id'] = value.id;
        return confederation;
      })));

}
