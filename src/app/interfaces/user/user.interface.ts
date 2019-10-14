export interface User {
  id?: number,
  uid?: string,
  email: string,
  displayName?: string,
  description?: string,
  password?: string,
  photoUrl?:string,
  provider?: string
}
