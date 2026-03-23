// Utilities
import { ConfirmFunction } from '@/types/ConfirmFunction'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const currencyCode = ref<string>()
  const localizationCode = ref<string>()
  const cashRegisterNumber = ref<string>()

  const setLocalizationCode = (code: string) => {
    localizationCode.value = code
  }
  const getLocalizationCode = () => {
    return localizationCode.value
  }

  const setCurrencyCode = (code: string) => {
    currencyCode.value = code
  }
  const getCurrencyCode = () => {
    return currencyCode.value
  }

  const setCashRegisterNumber = (number: string) => {
    cashRegisterNumber.value = number
  }
  const getCashRegisterNumber = () => {
    return cashRegisterNumber.value
  }

  return {
    setCurrencyCode,
    getCurrencyCode,
    setLocalizationCode,
    getLocalizationCode,
    setCashRegisterNumber,
    getCashRegisterNumber
  }

})

/**
 * Used to store functions that will be called when a user tries to go back
 * @returns {backStore}
 */
export const useBackStore = defineStore('back', () => {
  const confirmFunc = ref<ConfirmFunction | undefined>(undefined)
  const onAcceptFunc = ref<Function | undefined>(undefined)
  const onRejectFunc = ref<Function | undefined>(undefined)


  const Clear = () => {
    confirmFunc.value = undefined;
    onAcceptFunc.value = undefined;
    onRejectFunc.value = undefined;
  }
  return {
    /**
     * Function asking a user for confirmation of the action
     * @type {ConfirmFunction} is a function that takes no parameters and returns Promise<bool>
     */
    confirmFunc,
    /**
     * Function that is called when user accepts the prompt
     * After, a back function is called on router
     */
    onAcceptFunc,
    /**
     * Function that is called when user rejects the prompt.
     * After, a back function is NOT called
     */
    onRejectFunc,
    /**
     * Function that is called automatically when navigating to a new page
     */
    Clear
  }
})

