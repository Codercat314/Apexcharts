export function getForecast() {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=60&longitude=20&past_days=10&daily=apparent_temperature_min,apparent_temperature_max`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          reject(response.json())
        }
      })
      .then((data) => {
        resolve(transformData(data))
      })
  })
}

//changes format of json return
function transformData(raw) {
  let weatherData = {}
  weatherData.position = { lat: raw.latitude, long: raw.longitude }
  weatherData.timezone = {
      offset: raw.utc_offset_seconds,
      name: raw.timezone,
      short: raw.timezone_abbreviation,
      }
     
  weatherData.weather = []
  for (let i = 0; i < raw.daily.time.length; i++) {
    let data = {
      date: raw.daily.time[i],

      temp: {
        max: raw.daily.apparent_temperature_max[i],
        min: raw.daily.apparent_temperature_min[i]
      },
     
    }
    weatherData.weather.push(data)
  }
  return weatherData
}

