export interface UserDetails {
  id: number,
  uid: string,
  displayName: string,
  description?: string,
  photoUrl: string,
  following: boolean,
  followingCount: number,
  followersCount: number
}