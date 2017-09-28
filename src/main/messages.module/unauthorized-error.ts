import { GeneralError } from './general-error'
export const UnauthorizedError: GeneralError = {
    name: 'UnauthorizedError',
    message: 'Você não está logado',
    status: 403 // Forbidden
}
