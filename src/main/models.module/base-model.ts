import { ObjectIdClient } from './object-id-client'
import { ObjectIdServer } from './object-id-server'


export interface BaseModel {
    /**
     * Identifier internally used by mongoose on backend.
     * It is a string on frontend and an ObjectId object on backend
     */
    _id: ObjectIdClient | ObjectIdServer
}
