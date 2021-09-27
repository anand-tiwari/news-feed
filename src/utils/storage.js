/*
 This file handle Read/ Write exception and null check while using localStorage
 So we don't have to rewrite everytime
 */

const defaultLocalStorage = window.localStorage

function getData (key) {
  const data = defaultLocalStorage.getItem(key) || ''
  try {
    return JSON.parse(data)
  } catch (e) {}
  return data
}

function setData (key, value) {
  const newValue = typeof value === 'string' ? value : JSON.stringify(value)
  defaultLocalStorage.setItem(key, newValue)
}

export default {
  getData,
  setData
}
