import { User } from './user.interface';

export interface UserFollower {
    id: string,
    uid: string,
    displayName: string,
    description?: string,
    photoUrl: string,
    following: User[],
    followers: User[]
}