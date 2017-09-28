export const AuthErrorEnum = {
    MissingPasswordError: {
        name: 'MissingPasswordError',
        message: 'Nenhuma senha foi fornecida'
    },
    AttemptTooSoonError: {
        name: 'AttemptTooSoonError',
        message: 'Conta está temporariamente trancada. Tente de novo mais tarde'
    },
    TooManyAttemptsError: {
        name: 'TooManyAttemptsError',
        message: 'Conta trancada por excesso de tentativas fracassadas de login'
    },
    NoSaltValueStoredError: {
        name: 'NoSaltValueStoredError',
        message: 'Autenticação impossível. Nenhum sal armazenado'
    },
    IncorrectPasswordError: {
        name: 'IncorrectPasswordError',
        message: 'Nome de usuário ou senha está errado(a)'
    },
    IncorrectUsernameError: {
        name: 'IncorrectUsernameError',
        message: 'Nome de usuário ou senha está errado(a)'
    },
    MissingUsernameError: {
        name: 'MissingUsernameError',
        message: 'Nenhum nome de usuário foi dado'
    },
    UserExistsError: {
        name: 'UserExistsError',
        message: 'Um usuário já está registrado com o nome de usuário fornecido'
    }
}
