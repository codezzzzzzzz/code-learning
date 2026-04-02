function formateDate(date) {
  let year = date.getFullYear() + ''
  let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  let day = date.getDate() < 10? '0' + date.getDate() : date.getDate()
  return [year, month, day]
}
export default formateDate

export function formateHour(date) {
  let newDate = new Date(date)
  let hour = newDate.getHours() < 10? '0' + newDate.getHours() : newDate.getHours()
  let minute = newDate.getMinutes() < 10? '0' + newDate.getMinutes() : newDate.getMinutes()
  return `${hour}:${minute}`
}


export function formateDate2(date) {
  date = new Date(Number(date))
  let year = date.getFullYear() + ''
  let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  let day = date.getDate() < 10? '0' + date.getDate() : date.getDate()
  let hour = date.getHours() < 10? '0' + date.getHours() : date.getHours()
  let minute = date.getMinutes() < 10? '0' + date.getMinutes() : date.getMinutes()  
  return [year, month, day, hour, minute]
}
