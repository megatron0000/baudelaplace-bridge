import { BaseModel } from './base-model'
export interface User extends BaseModel {
    username: string
    admin: boolean
}
