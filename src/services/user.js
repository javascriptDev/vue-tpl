import { fetch } from '../plugins/fetch'
import { UserAPI } from '../constans/api'

export const getUser = () => {
    return fetch().get(UserAPI)
}
