const urlClanes = "https://narutodb.xyz/api/clan?page=1&limit=58"

console.log(urlClanes)

fetch(urlClanes)
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log(data)
    console.log(data.clans[0].name)
    console.log(data.clans[1].name)
    console.log(data.clans[0].characters[1])
  })

  const {createApp} = Vue