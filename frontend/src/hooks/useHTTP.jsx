import { useEffect, useState } from "react"

const sendHTTPrequest = async (url, config) => {
      const response = await fetch(url, config)
      const json = await response.json()

      if (!response.ok) {
         throw new Error(json.message || 'Something went wrong')
      }
      return json
}

const useHTTP = (url, config, initialData) => {
   const [error, setError ] = useState()
   const [isLoading, setIsLoading ] = useState(false)
   const [data, setData] = useState(initialData)   
   
   async function sendRequest(formData) {
      setIsLoading(true)
      try {
         const data = await sendHTTPrequest(url, {...config, body: formData})
         setData(data)
         
      } catch (error) {
         setError(error.message || 'Something went wrong')
      }
      setIsLoading(false)
   }

   useEffect(() => {
      if (config && (config.method == 'GET' || !config.method || !config)) {
         sendRequest()         
      }
   }, [sendRequest])

   return {data, isLoading, error, sendRequest}
}

export default useHTTP