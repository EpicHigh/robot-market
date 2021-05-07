const baseApi = 'http://localhost:8000'

const getApi = async <T = unknown>(endpoint: string): Promise<T | string> => {
  try {
    const response = await fetch(`${baseApi}${endpoint}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    })
    if (response.status >= 200 && response.status < 300) {
      return (await response.json()) as T
    }
    throw new Error(response.statusText)
  } catch (e) {
    return Promise.reject(e)
  }
}

export default getApi
