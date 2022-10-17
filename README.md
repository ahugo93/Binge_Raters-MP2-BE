
# Binge Raters Application

A full stack application for users to explore, add, and review their favorite TV Shows. 
With this application users would be able to rate their favorite shows for others to see and find new binge worthy shows.



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

