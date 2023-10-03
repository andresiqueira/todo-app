# TODO Project

A TODO project that contains a Back-End with Node.JS API Container, Front-End with React.Js Container and Database mySql Container.

To run the project you must have docker installed first. Go to the root path project and execute the command below on your terminal, ensure that the http port 3000, 3306 and 3009 are free. After wait about two minutes to ensure that all of containers is up and the project is running, then open the URL in your browser.

#### Running the project:
```
docker compose up
```

## Front-End Documentation
The app was made following all the references in the Figma file, respecting the requirements and functionalities.

To access the App, open the URL below in your browser.

```
 http://localhost:3009 
```


## API Documentation

If you want to test the API using somenthing like Postman, Insomnia or something else, you can call the API on.
```
 http://localhost:3000 
```

#### Body Json example

```
{
  "title": "My todo", //string
  "description": "Todo description", //string
  "status": "todo", //OPTIONS ["todo", "doing", "done"]
  "isFavorite": true, //accept boolean or 0/1
  "containerColor": #FFFFFF //string
}
```
#### Queries accepted

```
title, is_favorite and container_color
}
```

### Methods
#### Return all items

```http
  GET /
```

#### Return one item

```http
  GET /${id}
```

#### Create item

```http
  POST /
```

#### Update one item

```http
  PUT /${id}
```

#### Delete item

```http
  DELETE /${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | The ID item that you are looking for |

## Contact

- Whatsapp: +55 (98) 98730-9577
- Email: andresiqueira-ti@outlook.com
- Linkedin: [André Siqueira](https://www.linkedin.com/in/andre-siqueira/)