export interface UsersResponse {
  items: User[]
  totalCount: number
  error: null | string
}

export interface UserPhotos {
  small?: string | null
  large?: string | null
}

export interface User {
  name: string
  id: number
  photos: UserPhotos
  status?: string | null
  followed: boolean
}
