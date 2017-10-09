import { BaseModel } from './base-model'
import { ObjectId } from './object-id'
import { User } from './user'
export interface MinecraftStep extends BaseModel {
    x: number
    y: number
    z: number
    user: (ObjectId|User)
    date: Date
}
