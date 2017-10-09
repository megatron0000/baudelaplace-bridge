import { GeneralError } from './general-error'

export const OwnershipError: GeneralError = {
    message: 'Você não tem direitos sobre esse item',
    name: 'OwnershipError',
    status: 403
}
