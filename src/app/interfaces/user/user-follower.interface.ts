import { SubUserFollower } from './sub-user-follower.interface';

export interface UserFollower {
    id: number,
    uid: string,
    displayName: string,
    description?: string,
    photoUrl: string,
    following: SubUserFollower[],
    followers: SubUserFollower[]
}