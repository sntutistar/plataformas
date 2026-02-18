import http from 'k6/http'
import { check } from 'k6'

export const options = {
  vus: Number(__ENV.VUS || 200),
  duration: __ENV.DURATION || '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<2000']
  }
}

const baseUrl = __ENV.BASE_URL || 'http://localhost:8080'

export default function () {
  const response = http.get(`${baseUrl}/books/search?title=1984`)

  check(response, {
    'status 200': (r) => r.status === 200,
    'response body is JSON-like': (r) => r.body && r.body.includes('[')
  })
}
