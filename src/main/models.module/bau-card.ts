import { BaseModel } from './base-model'
import { ObjectId } from './object-id'
import { BauTag } from './bau-tag'
import { User } from './user'

export interface BauCard extends BaseModel {
    question: string
    answer: string
    tags: (ObjectId | BauTag)[]
    createdBy: (ObjectId | User)
}
