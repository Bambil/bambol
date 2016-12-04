# i**Middle**ware
## Introduction  
This is an IoT middleware created with three goals in mind:

* Performance
* Scalability
* Modularity

## Do we lie?!
We don't lie! For all of the above goals we have done something. 
* For *performance*:  
we have used MQTT for fast and reliable delivery of messages, and we have 
also used the Nodejs for the sake of it's asynchrounos innate, that improves 
the performance of the application.

* For *Scalability*:  
We are using containerized MQTT servers, and balance loaders so that our servers
never discourage you :)

* For *Modularity*:  
Nodejs is inherently extremely modular, and to make our application more 
modular, we intend to use **docker** containers for different services of our
application. For example in our current architecture this middleware is 
supposed to include three parts:
* Message Passing Container
* WebUI Container
* Automation Engine Container

From the benefits of this architecture we can point out following reasons:
1. This makes balance loading easier. (By creating multiple instance of a certain
docker image.  
2. Easier development.
3. Greater maintainability
