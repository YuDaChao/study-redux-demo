import request from '../utils/request'

export function getTopics() {
    return request('/api/v1/topics')
}