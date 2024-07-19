// Add JavaScript code here
const submitRequest = (Event) => {
  const name = document.getElementById("name");
  const songName = document.getElementById("song-title")
  const artistName = document.getElementById("artist-name")
  event.preventDefault()
  const songRequest = (`${name.value} has requested ${songName.value} by ${artistName.value}`)
  songRequest.innerHTML += 
console.log(songRequest)
  
}

const form = document.getElementById("request-form");


form.addEventListener("submit", submitRequest);