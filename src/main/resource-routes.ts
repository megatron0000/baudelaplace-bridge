module path {
    export function rebase(subpath: string, base: string) {
        if (!subpath.includes(base)) {
            throw new Error(`${base} is not superpath of ${subpath}`)
        }

        return normalize(subpath.replace(base, ''))
    }

    export function normalize(pathString: string) {
        return pathString.replace(/\/\//g, '/')
    }
}

export module builder {

    export interface Callable {
        (): string

        (relativeTo: string): string

        <K>(relativeTo: Path<K>): string
    }

    export type PropPaths<T> = {
        [P in keyof T]: Path<T[P]>
        }

    export type Rooted = {
        __: string
    }

    export type Path<T> = Callable & PropPaths<T>


    /**
     * @param {(T & builder.Rooted) | string} subpaths
     * @param {string} ancestorPath
     * @returns {builder.Path<T>}
     */
    export function build<T>(subpaths: (T & Rooted) | string, ancestorPath: string = ''): Path<T> {

        if (typeof subpaths === 'object' && subpaths[ '__' ] === undefined) {
            throw new Error(`subpath with ancestor ${ancestorPath} has no __ member`)
        }

        let selfPath = '/' + (typeof subpaths === 'object' ? <string> subpaths[ '__' ] : subpaths)

        let pathObj = <Path<T>> function <K>(relativeTo: string | Path<K> = '') {
            return path.rebase(ancestorPath + selfPath, typeof relativeTo === 'string' ? relativeTo : relativeTo())
        }

        if (typeof subpaths === 'object') {
            Object.getOwnPropertyNames(subpaths).forEach(prop => {
                if (prop === '__') {
                    return
                }
                pathObj[ prop ] = build(subpaths[ prop ], pathObj())
            })
        }

        return pathObj
    }
}


export const root = builder.build({
    __: '',
    cspReport: 'csp-report',
    bauAnki: {
        __: 'bau-anki',
        api: {
            __: 'api',
            cards: {
                __: 'cards',
                withId: ':cardId'
            },
            tags: {
                __: 'tags'
            }
        }
    },
    dishes: {
        __: 'dishes',
        withId: ':dishId'
    },
    test: {
        __: 'test',
        __wildcard: '*'
    },
    minecraft: {
        __: 'minecraft',
        walkRecord: 'walk-record'
    },
    users: {
        __: 'users',
        register: 'register',
        login: 'login',
        logout: 'logout',
        fetch: 'fetch'
    }
})

// console.log(root.bauAnki(root.bauAnki), root.bauAnki.api.cards.withId(root.bauAnki), root())
