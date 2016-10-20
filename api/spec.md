# Ticketing System API Specification

## ENTITIES

### Tickets 

The ticket resource describes a task to be done. A ticket resource must be created with the following properties: 

#### Ticket Properties

+ id
+ title
+ priority
+ project_id
+ project_name
+ assignees
+ assigned
+ due
+ stage
+ status

Additionally, it may have the following properties:

#### Ticket Child Properties

+ comments
+ descriptions

#### Ticket Endpoints


##### Create a Ticket
+ POST /tickets

##### Create a Message
+ POST /tickets

##### Get All Tickets 
+ GET /tickets

##### Get A Single Ticket 
+ GET /tickets/:id

##### Update A Ticket
+ PUT /tickets/:id

##### Delete A Ticket
+ POST /tickets/:id



### Users

+ uid
+ username
+ firstname
+ lastname
+ bio
+ team
+ tickets


