export interface UserDetails {
  id: string,
  uid: string,
  displayName: string,
  description?: string,
  photoUrl: string,
  following: boolean,
  followingCount: number,
  followersCount: number
}