import { User } from '../user/user.interface';

export interface Leaderboard {
    user: User,
    points: number
}