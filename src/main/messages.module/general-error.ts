import { ServerMessage } from './server-message'
export interface GeneralError extends ServerMessage {
    status: number
}
