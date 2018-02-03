import { stringify } from 'qs'
import request from '../utils/request'

export function getTopics(params) {
    return request(`/api/v1/topics?${stringify(params)}`)
}