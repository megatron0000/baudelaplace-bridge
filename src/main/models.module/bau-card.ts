import { BaseModel } from './base-model'
import { User } from './user'
import { BauTag } from './bau-tag'

export interface BauCard extends BaseModel{
    question: string
    answer: string
    tags: BauTag[]
    createdBy: User
}
