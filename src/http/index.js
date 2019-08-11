import ajax  from './config'
import qs from 'qs'

function httpPost (url, data) {
  return ajax.post(url, qs.stringify(data))
}



export const userDels = data => httpPost('/jiaweishabi', data)
