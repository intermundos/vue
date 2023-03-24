import ky          from 'ky'

const URL = import.meta.env.VITE_API_URL_NEW as string

const headers = new Headers({ 'Content-Type': 'application/json' })

const client = ky.create({
  prefixUrl: URL,
  headers: headers,
  timeout: 120000
})

const sClient = ky.create({
  prefixUrl: '/api',
  timeout: 120000
})


export { client, sClient }
