import { GeneralError } from './general-error'

export const ServerDownError: GeneralError = {
    name: 'ServerDownError',
    message: 'O servidor está desligado',
    status: 0
}
