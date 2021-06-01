FORMAT: 1A


# Chicken

Chicken is a simple API.

### List of all the chicken[GET]

+ Response 200 (application/json)

    [
        {
            "steps": 0,
            "isRunning": false,
            "_id": "609c562ad5647e2adc09af39",
            "name": "ro97354",
            "weigth": 100,
            "birthday": "2021-05-12T22:26:50.292Z",
            "__v": 0
        },
        {
            "steps": 0,
            "isRunning": false,
            "_id": "609c72c6455d1a5d100c1968",
            "name": "Rouan",
            "weigth": 100,
            "birthday": "1998-09-20T00:00:00.000Z",
            "__v": 0
        }
    ]

### Create a New chicken [POST]

You may create your own chicken using this action. It takes a JSON
object containing a name and a weigth.

+ Request (application/json)

        {
            "name" : "Rouan",
            "weigth": "100",
            "birthday": "1998-09-20"
        }

+ Response 201 (application/json)


    + Body

            {
                "steps": 0,
                "isRunning": false,
                "_id": "609c762b204e357d00b1a468",
                "name": "Rouan",
                "weigth": 100,
                "birthday": "1998-09-20T00:00:00.000Z",
                "__v": 0
            }
            
### Update a chicken [PUT]

You may be able to update a chicken in the data base using this action and the id of the chicken you want to update. 
It takes a Json Object containing the data to update.

+ Request (http://localhost:3000/chicken/609c562ad5647e2adc09af39)

        {
            
            "weigth": "97"
           
        }
+ Response 200 (application/json)

    + Body

            {
                "steps": 0,
                "isRunning": false,
                "_id": "609c562ad5647e2adc09af39",
                "name": "ro97354",
                "weigth": 97,
                "birthday": "2021-05-12T22:26:50.292Z",
                "__v": 0
            }
        
### Delete a chicken [DELETE]

You may be able to delete a chicken in the data base using this action and the id of the chicken you want to delete. 

+ Response 200 (http://localhost:3000/chicken/609c762b204e357d00b1a468)

    + Body

            {
                "steps": 0,
                "isRunning": false,
                "_id": "609c762b204e357d00b1a468",
                "name": "Rouan",
                "weigth": 100,
                "birthday": "1998-09-20T00:00:00.000Z",
                "__v": 0
            }
        
###  Update a chicken [PATCH]

You may be able to update a chicken in the data base using this action and the id of the chicken you want to update. 
It takes a Json Object containing the data to update.

+ Request (http://localhost:3000/chicken/609c562ad5647e2adc09af39)

        {
            
            "weigth": "97"
           
        }
+ Response 200 (application/json)

    + Body

            {
                "steps": 0,
                "isRunning": false,
                "_id": "609c562ad5647e2adc09af39",
                "name": "ro97354",
                "weigth": 97,
                "birthday": "2021-05-12T22:26:50.292Z",
                "__v": 0
            }
###  Run chicken Run [POST]

You may be able to make a chicken run using this action and the name of the chicken you want. 
It takes a Json Object containing the name of the chicken.

+ Request (http://localhost:3000/chicken/609c562ad5647e2adc09af39)

        {
            
            "name": "ro97354"
           
        }
+ Response 200 (application/json)

    + Body

            {
                "steps": 1
            }
