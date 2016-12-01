# i**Middle**ware
## Introduction  
This is an IoT middleware created with three goals in mind:

* Performance
* Scalability
* Modularity

## Do we lie?!
We don't lie! For all of the above goals we have done something. 
* For *performance*:  
we have used MQTT for fast and reliable delivery of messages, and we have also used the
Nodejs for the sake of it's asynchrounos innate, that improves the performance
of the application.

* For *Scalability*:  
We are using containerized MQTT servers, and balance loaders so that our servers
never discourage you :)

* For *Modularity*:
Nodejs is inherently extremely modular, and to make our application more modular,
we have used the awesome Nodejs named [architect](https://github.com/c9/architect). 
In our application everything is a plugin, so it's will be extremely easy to deploy
new features and increase the maintainability of the application.
