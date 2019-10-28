export interface SubUserFollower {
    id: number,
    uid: string,
    displayName: string,
    description?: string,
    photoUrl: string,
    followingCount: number,
    followersCount: number
}