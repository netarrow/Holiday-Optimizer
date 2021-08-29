import axios from 'axios'

export default function getHolidays(year, country) {
  return new Promise((resolve, reject) => {
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`)
    .then(function (response) {
        resolve(response)
    })
    .catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}
