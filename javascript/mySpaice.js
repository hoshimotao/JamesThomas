const recordVideoOne = new Promise((resolve, reject) => {
	resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
	resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
	resolve('Video 3 recorded')
})

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message)
})