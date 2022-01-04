import imdb
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)


# ia = imdb.IMDb()

# my_movies = {'Die Hard', 'Spider-Man', 'The Matrix'}

# for m in my_movies:
#     movieID = ia.search_movie(m)[0].getID()
#     movie = ia.get_movie(movieID)
#     print(movie)

#     print(f'------------------------')

# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument('name', type=str, help="ERROR") # used to require the argument

"""TODO return more movie data,
   -Title
   -Year
   -img link
"""


class movie_data(Resource):
    def get(self, movie_name):
        print(movie_name)
        movieTitle, movieYear, movieImg = self.grab_imdb_data(movie_name)
        return {"title" : movieTitle,
                "year"  : movieYear,
                "img"   : movieImg}
    def grab_imdb_data(self, movie_name):
        ia = imdb.IMDb()
        movie_id = ia.search_movie(movie_name)[0].getID()
        movie = ia.get_movie(movie_id)
        year = str(movie['year'])
        title = str(movie['title'])
        img = movie['cover url']
        return title, year, img

api.add_resource(movie_data, "/movie_data/<string:movie_name>")


if __name__ == '__main__':
    app.run(host = '127.0.0.9', port = '7878', debug=True)