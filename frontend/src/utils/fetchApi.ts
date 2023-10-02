interface FetchApiProps {
  id?: string | number; 
  params?: any
  options?: any
}

const fetchApi = async ({ id, params, options }: FetchApiProps) => {
  const baseUrl = `${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/`
  
  try {
    const data = await fetch(`${baseUrl}${id ? id : ''}${params ? "?" + new URLSearchParams({...params}) : ''}`, {...options})
    
    const result = await data.json()
    return result
  } catch (error) {
    console.log("fetch error", error)
  }
}

export default fetchApi

