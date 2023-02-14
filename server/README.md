**Reel Dreams**

End points for Reel Dreams Cinema API.

**Movies**


**GET**** getAllMovies**


localhost:3232/api/movies

Returns all movies stored in the database.

**GET**** getMovieByID**


localhost:3232/api/movies/2

Returns a single movie based of id passed to it.

**POST**** createMovie**


localhost:3232/api/movies/

Creates a new movie in the database and returns the details of the newly created movie.

**Body** raw (json)

json

{

"name":"Titanic",

"rating":"PG",

"director":"David Cameron",

"cast":"Leonardo DiCaprio",

"runtime":120,

"genre":"Romantic",

"price":9.0

}

**POST**** updateMovie**


localhost:3232/api/movies/3

Updates a movie in the database based of id passed to it and returns the details of the updated movie.

**Body** raw (json)

json

{

"name":"Titanic 2",

"rating":"PG",

"director":"David Cameron",

"cast":"Leonardo DiCaprio",

"runtime":120,

"genre":"Romantic",

"price":9.0

}

**DELETE**** deleteMovie**


localhost:3232/api/movies/3

Deletes a movie from the database based of id passed to it.

**Users**


**GET**** getAllUsers**


localhost:3232/api/users

Returns all users stored in the database.

**GET**** getUserByID**


localhost:3232/api/users/1

Returns a single user based of id passed to it.

**POST**** createUser**


localhost:3232/api/users

Creates a new user in the database and returns the details of the newly created user.

**Body** raw (json)

json

{

"name":"Bob",

"email":"bob@email.com",

"phoneNo":"123 456 7890"

}

**POST**** updateUser**


localhost:3232/api/users/5

Updates a user in the database based of id passed to it and returns the details of the updated user.

**Body** raw (json)

json

{

"name":"Bobby",

"email":"bobby@email.com",

"phoneNo":"123 456 7890"

}

**DELETE**** deleteUser**


localhost:3232/api/users/5

Deletes a user from the database based of id passed to it.

**bookings**


**GET**** getAllBookings**


localhost:3232/api/bookings

Returns all bookings stored in the database.

**GET**** getBookingsByUserID**


localhost:3232/api/bookings/1

Returns all bookings belonging to a single user based of userID passed to it.

**GET**** getBookingsByUserIDAndShowingID**


localhost:3232/api/bookings/1/1

Returns all bookings belonging to a single user and of a single showing based of userID and showingID passed to it.

**POST**** createBooking**


localhost:3232/api/bookings

Creates a new booking in the database and returns the details of the newly created booking.

**Body** raw (json)

json

{

"userID":2,

"showingID":2,

"seatID":3

}

**POST**** updateBooking**


localhost:3232/api/bookings/5

Updates a booking stored in the database based of an id passed to it and returns the details of the updated booking.

**Body** raw (json)

json

{

"userID":1,

"showingID":1,

"seatID":2

}

**DELETE**** deleteBooking**


localhost:3232/api/bookings/1/1

Deletes a booking from the database based of an id passed to it.

**Seats**


**GET**** getAllSeats**


localhost:3232/api/seats

Returns all seats stored in the database.

**GET**** getAllSeatsByScreenID**


localhost:3232/api/seats/1

Returns a single seat from the database based of an id passed to it.

**POST**** createSeat**


localhost:3232/api/seats

Creates a new seat in the database and returns the details of the newly created seat.

**Body** raw (json)

json

{

"rowID":0,

"colID":0,

"screenID":2,

"occupied":true,

"aisle":false

}

**POST**** updateSeat**


localhost:3232/api/seats/5

Updates a seat in the databased based of an id passed to it and returns the details of the updated seat.

**Body** raw (json)

json

{

"rowID":6,

"colID":0,

"screenID":2,

"occupied":true,

"aisle":true

}

**DELETE**** deleteSeat**


localhost:3232/api/seats/5

Deletes a seat from the database based of an id passed to it.

**Screens**


**GET**** getAllScreens**


localhost:3232/api/screens

Returns all screens stored in the database.

**GET**** getScreenByID**


localhost:3232/api/screens/2

Returns a single screen from the databased based of an id passed to it.

**POST**** createScreen**


localhost:3232/api/screens

Creates a new screen in the database and returns the details of the newly created screen.

**Body** raw (json)

json

{

"rowCount":7,

"colCount":7

}

**POST**** updateScreen**


localhost:3232/api/screens/4

Updates a screen in the database based of an id passed to it and returns the details of the updated screen.

**Body** raw (json)

json

{

"rowCount":6,

"colCount":9

}

**DELETE**** deleteScreen**


localhost:3232/api/screens/4

Deletes a screen from the database based of an id passed to it.

**Showings**


**GET**** getAllShowings**


localhost:3232/api/showings

Returns all showing stored in the database.

**GET**** getShowingByID**


localhost:3232/api/showings/2

Returns a single showing based of an id passed to it.

**POST**** createShowing**


localhost:3232/api/showings/

Creates a new showing in the database and returns the details of the newly created showing.

**Body** raw (json)

json

{

"movieID":1,

"screenID":2,

"datetime":"2024-02-14T12:27:06.942Z"

}

**POST**** updateShowing**


localhost:3232/api/showings/4

Updates a showing in the database based of an id passed to it and returns the details of the updated showing.

**Body** raw (json)

json

{

"movieID":2,

"screenID":2,

"datetime":"2024-02-14T12:27:06.942Z"

}

**DELETE**** deleteShowing**


localhost:3232/api/showings/4

Deletes a showing from the database based of an id passed to it.