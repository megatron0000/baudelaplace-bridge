import { BaseModel } from './base-model'
import { User } from './user'
import { ObjectId } from './object-id'

export interface BauTag extends BaseModel {
    text: string
    createdBy: (ObjectId | User)
}
