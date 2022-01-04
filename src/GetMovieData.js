async function getMovieData(movieName) {
  const url = 'http://127.0.0.9:5000/movie_data/' + movieName;
  const res = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  // console.log(res.status); // 200
  // console.log(res.statusText); // OK
  if (res.status === 200) {
    var text = await res.json()
  } else {
    var text = 'null'
  }
  console.log(text)
  return text
};

// function displayMovieData(movieName) {
//   window.addEventListener("load", async () => {
//   data = await getMovieData(movieName);
//   console.log(data['img'])
//   document.getElementById('movie_title').innerHTML = data['title'];
//   document.getElementById('movie_year').innerHTML = data['year'];
//   // document.getElementById('movie_1_img').innerHTML = data['img'];
//   var img = document.createElement("img")
//   img.src = data['img']
//   document.body.appendChild(img)
// });
// }

// displayMovieData('Blade Runner');
export default getMovieData