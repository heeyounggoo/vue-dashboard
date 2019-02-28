import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

export const userLogin = (data) => {
  return service({
    url: '/login',
    method: 'post',
    data,
  })
}

export const noticeList = () => {
  return service({
    url: '/table/list',
    method: 'get',
  })
}

export const noticeDetail = (data) => {
  return service({
    url: `/table/detail/${data}`,
    method: 'get',
  })
}

export const noticeDelete = (data) => {
  return service({
    url: '/table/delete',
    method: 'post',
    data
  })
}


export const noticeRegister = (data) => {
  return service({
    url: '/table/register',
    method: 'post',
    data
  })
}


export const noticeModify = (data) => {
  return service({
    url: '/table/modify',
    method: 'post',
    data
  })
}