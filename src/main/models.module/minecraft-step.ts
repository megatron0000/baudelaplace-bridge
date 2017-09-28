import { BaseModel } from './base-model'
export interface MinecraftStep extends BaseModel {
    x: number
    y: number
    z: number
    user: string
    date: Date
}
