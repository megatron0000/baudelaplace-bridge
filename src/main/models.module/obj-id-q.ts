import { ObjectIdClient } from './object-id-client'
import { ObjectIdServer } from './object-id-server'
import ObjectId = require('bson-objectid')

export function objIdQ(obj: any): obj is ObjectIdClient | ObjectIdServer {
    if (obj instanceof ObjectId || typeof obj === 'string') {
        return true
    }
    return false
}
