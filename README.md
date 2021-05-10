# Fediverse Creators API

A simple JSON-based API for getting information on Fediverse Creators. 

Hosted at https://fediversewiki-api.herokuapp.com/


# Contributing
To add a creator to the API, add these variables to [data/characters.json](https://github.com/fediversewiki/fediversewiki-api/blob/master/data/characters.json)

```
  {
    "name": "John Doe",
    "alternate_names": "",
    "gender": "Male",
    "category": "Novelist",
    "description": "",
    "fediverse": "@JohnDoe@instance.tld",
    "link": "https://instance.tld/@JohnDoe",
    "image": "https://fediversewiki-api.herokuapp.com/images/john-doe.jpg"
  }
```
  and also add an image with a corresponding profile picture in [public/images](https://github.com/fediversewiki/fediversewiki-api/tree/master/public/images) with a 1x1 aspect ratio.
