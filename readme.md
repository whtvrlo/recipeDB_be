I want to make a website where users can access recipies.
The website will need to have register and login facilities
for students.

Frontend

    Users:

    Recipies:
        <Recipies /> -> <RecipeContainer /> -> <RecipeCard /> -> <Recipe />

Backend

Tables

    Users:
        username: string
        email: string
        password: string

    Recipies:
        name: string
        author: string
        category: string  // to be searched on e.g. returns all Indian recipies
        rating: integer
        desc: string // long recipe

Routes

    Users:
        main route:
            '/user'

        sub-routes:
            '/', GET //validates with jwt
            '/register', POST
            '/login', POST

    Recipies:
        main route:
            '/recipies'

        sub-routes:
            '/addrecipe', POST
            '/:category', GET  // e.g. /recipies/indian, /recipies/french  finds all by category
            '/:id', PUT
            '/:id', DELETE
