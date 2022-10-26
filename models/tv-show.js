//Dependencies
const mongoose = require('mongoose')

//Schema
const showSchema = new mongoose.Schema({
  tv_id: {
    type: Number,
  },
  name: {
    type: String,
  },
  genres: {
    type: String,
  },
  first_air_date: {
    type: String,
  },
  number_of_seasons: {
    type: Number,
  },
  number_of_episodes: {
    type: Number,
  },
  poster_path: {
    type: String
  }
})


module.exports = mongoose.model('TV Show', showSchema)





// module.exports = [
//     {
//       tv_id: '1',
//       name: 'Game of Thrones',
//       number_of_seasons: 8,
//       genres: 'Drama',
//       poster_path: 'https://images.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       tv_id:'2',
//       name: 'Euphoria',
//       number_of_seasons: 2,
//       genres: 'Drama',
//       poster_path: 'https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwYA_m37ICwfzIkKaqE4Z1GykJuL7yw3pjQ&usqp=CAU.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       tv_id:'3',
//       name: 'Rick and Morty',
//       number_of_seasons: 6,
//       genres: 'Sitcom',
//       poster_path: 'https://images.unsplahttps://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpgsh.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       tv_id:'4',
//       name: 'Stranger Things',
//       number_of_seasons: 4,
//       genres: 'Mystery',
//       poster_path: 'https://i.redd.it/8fa9st2ajlv71.jpg'
//     }
//   ]
