# Frontend Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has addtional libraries included:

- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [styled-components](https://styled-components.com/)
- [polished](https://polished.js.org/)

Head over to the coding challenge [here](./CHALLENGE.md).


## Why Redux Toolkit and Restful API (My opinion)

### Redux Toolkit
Redux toolkit  is an officially recommended and SOPE library that stands for Simple, Opinionated, Powerful, and Effective state management library.\
Redux Toolkit comes with a lot of tools that save you lines of code, time, and headaches. \
But its purpose and benefits have raised controversy in the tech realm.\
For some user's, the package is very useful and fits all the points listed above. \
However, some find that it requires a lot of boilerplate code and just makes things more confusing. \
The only way to truly find out, is to use Redux Toolkit for yourself!

### Restful API
I used Restful API in this project, since I wish I show you my sense of backend part.\



## Available Scripts

In the project directory, you can run:

### `npm start`

- Starts the RESTful API server on [http://localhost:4000](http://localhost:4000) and runs the app in development mode on [http://localhost:3000](http://localhost:3000).
- Concurrent module is used to keep on track of different outputs.
#### Notes

- The page will reload if you make edits.
- You will also see any TypeScript or lint errors in the console.
- You can re-run the script to reset/regenerate the data.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## RESTful API

Running on [http://localhost:4000](http://localhost:4000).

### `/tournaments`

#### GET

Get a list of tournaments.

### `/tournaments/add`

#### POST
Create a tournament.

##### Request Example

```json
{
  "name": "Foo"
}
```

##### Response Example

```json
{
  "id": "2b86b928-a0b5-4dec-8b5a-5f3519790829",
  "name": "Foo",
  "organizer": "Voluptas",
  "game": "League of Legends",
  "participants": {
    "current": 204,
    "max": 256
  },
  "startDate": "2020-02-27T11:36:27.047Z"
}
```

### `/tournaments/edit`

#### POST
Edit a tournament
##### Request Example

```json
{
  "name": "Foo"
}
```
```json
{
  "id": "2b86b928-a0b5-4dec-8b5a-5f3519790829",
  "name": "Foo",
  "organizer": "Voluptas",
  "game": "League of Legends",
  "participants": {
    "current": 204,
    "max": 256
  },
  "startDate": "2020-02-27T11:36:27.047Z"
}
```

### `/tournaments/delete`

#### POST
Delete a tournament.

##### Response Example

```json
{}
```

### `/tournaments/find`

#### POST
Search tournaments by any value
##### Request Example

```json
{
  "name": "Quam"
}
```

##### Response Example

```json
[
  {
    "id": "79218e94-91fd-4420-8278-f453574b97c4",
    "name": "Veritatis Quam Facilis",
    "organizer": "Rerum Perspiciatis",
    "game": "Rocket League",
    "participants": {
      "current": 206,
      "max": 256
    },
    "startDate": "2020-02-27T11:28:02.233Z"
  }
]
```


