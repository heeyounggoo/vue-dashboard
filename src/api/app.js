import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

export const userLogin = (data) => {
  return service.post('/login', data)
  // return service({
  //   url: '/login',
  //   method: 'post',
  //   data,
  // })
}

export const noticeList = (params) => {
  return service.get('/table/list', {params})
  // return service({
  //   url: '/table/list',
  //   method: 'get',
  //   params
  // })
}

export const noticeDetail = (data) => {
  return service.get(`/table/detail/${data}`)
  // return service({
  //   url: `/table/detail/${data}`,
  //   method: 'get',
  // })
}

export const noticeDelete = (data) => {
  return service.post('/table/delete', data)
  // return service({
  //   url: '/table/delete',
  //   method: 'post',
  //   data
  // })
}


export const noticeRegister = (data) => {
  return service.post('/table/register', data)
  // return service({
  //   url: '/table/register',
  //   method: 'post',
  //   data
  // })
}


export const noticeModify = (data) => {
  return service.post('/table/modify', data)
  // return service({
  //   url: '/table/modify',
  //   method: 'post',
  //   data
  // })
}