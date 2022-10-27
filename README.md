
# Binge Raters Application

A full stack application for users to explore, add, and review their favorite TV Shows. 
With this application users would be able to rate their favorite shows for others to see and find new binge worthy shows.


## How To Use

You bring your opinion to our website, by looking up and reviewing the movies you want to review. We have have made it simple for the end-user, 
to simple by typing the movie you are looking for in the search box, and will show the results. Once you find your movie you want, just click on it
and it will bring it to the movie profile, there you are simple given a comment box and  a star rating, from 1 to 5, so you can share your opinion on the movie, by either writing a comment, giving a star rating, or both. 


## Features

- Create new TV Show options
- Remove TV Shows you feel are no longer binge worthy
- Update existing show ratings or information
- Rate your favorite shows based on its binge worthy-ness
 


## Deployment

To deploy this project run

```bash
  npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Routes

| Method  | Path      |	Purpose                       |
|---------|:---------:|:--------------------------------|
| GET     |	/ | The home page |
| GET	  | /shows | Index page listing all shows |
| GET	  | /shows/new	  | New form for a show |
| POST	  | /shows | Create a new place |
| GET	  | /shows/:id | Show one show in detail (Associated reviews, new review form, delete review button) |
| GET	  | /shows/:id/edit| Edit form for a show |
| PUT	  | /shows/:id | Make changes to existing show |
| DELETE  |	/shows/:id	| Delete a show |
| POST	  | /shows/:id/review| Add review to a show |
| DELETE  | /shows/:id/review/:reviewId |	Delete a review |

## Database

Shows

| Field |	Type |
|-------|--------|
| _id	| Object ID |
| name	| String |
| genre	| String |
| airDate	| Date |
| seasons	| Number |
| episodes | Number |
| pic	| String |

Reviews

| Field | Type |
|-------|-------|
| _id |	Object ID |
| show_id | ref(places) Object_Id |
| rating | Number |
| comment |	String |
| reviewer | String |

## Authors

- [@ahugo93](https://www.github.com/ahugo93)
- [@maxxlarss](https://www.github.com/maxxlarss)
- [@appplus](https://www.github.com/appplus)
- [@palmer2539](https://www.github.com/palmer2539)
- [@JeffereyChasing](https://github.com/JeffereyChasing)

