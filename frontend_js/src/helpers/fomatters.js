export function toDate(date) {
  let formatDate = ((date.getDate() )) + "-" + ((date.getMonth() + 1)) + "-" + date.getFullYear()
  return formatDate
}

export function formatDate(date) {

  let formatDate
  
  if(date.includes('-')) {
    formatDate = date.split('-').reverse().join('-')
  } else {
    formatDate = date.split('/').reverse().join('/')
  }

  return formatDate
}