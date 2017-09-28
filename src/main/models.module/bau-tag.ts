import { BaseModel } from './base-model'
import { User } from './user'

export interface BauTag extends BaseModel {
    text: string
    createdBy: User
}
