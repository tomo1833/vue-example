import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', () => {
  const errorInfo = reactive({
    errorFlag: false,
    errorMessage: ''
  })

  const setError = (message: string, erroer: any) => {
    console.error(message, erroer)
    errorInfo.errorFlag = true
    errorInfo.errorMessage = message
  }

  const resetError = () => {
    errorInfo.errorFlag = false
    errorInfo.errorMessage = ''
  }

  const handleFetchError = (error: any) => {
    if (error.response) {
      handleResponseError(error)
    } else {
      setError('ネットワークエラー', error.message)
    }
  }

  const handleResponseError = (error: any) => {
    switch (error.response.status) {
      case 403:
        setError('認証エラー', error.response)
        break
      case 400:
        setError('パラメータエラー', error.response)
        break
      default:
        setError('システムエラー', error.response)
    }
  }

  return { errorInfo, setError, resetError, handleFetchError, handleResponseError }
})
