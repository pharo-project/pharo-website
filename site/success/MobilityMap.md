{
"title" : "Mobility Map",
"layout": "blogpost",
"publishDate": "2018-10-08"
}

Mobility Map is a broker for mobility services. It offers multi-modal routing search enabling users to find the best travel options between locations. Travel options include car sharing, bikes, trains, busses etc. Rented cars can be offered for ride sharing on booking time letting other people find it to participate in the ride. Single travel options are combined in travel plans that can be booked and managed in a very easy way. 

![](http://files.pharo.org/success-stories/images/2018-MobilityMap.png width=800px)


For this project main requirements were scalability to serve a large user base and flexibility to add more additional providers to the broker. The application has been realized using web technologies for the frontend and pharo for the backend. Using a microservice architecture combined with a broker it is easy to extend the platform with additional brokers. Deployment is done using docker swarm for distributing dozens of pharo images among multiple server machines connected by a message queue for the communication. Pharo supported that scenario very well enabling us the meet the requirements with less effort. 

Pharo turned out to be a perfect fit to develop the application in a agile way. Small development cycles with continuous integration and continuous delivery enables fast turnarounds for the customers to validate progress. Our ESUG 2018 Presentation has more information: [http://www.slideshare.net/slideshow/embed\_code/key/GJic2lZbLGlQlD](http://www.slideshare.net/slideshow/embed_code/key/GJic2lZbLGlQlD)



<iframe src="//www.slideshare.net/slideshow/embed_code/key/GJic2lZbLGlQlD" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen>
</iframe>
<div style="margin-bottom:5px">
<strong> 
<a href="//www.slideshare.net/zweidenker/docker-and-pharo-zweidenker" title="Docker and Pharo @ZWEIDENKER" target="_blank">Docker and Pharo @ZWEIDENKER
</a> 
</strong>
from
<strong>
<a href="https://www.slideshare.net/zweidenker" target="_blank">ZWEIDENKER GmbH
</a>
</strong> 
</div>




Contact [ZWEIDENKER](http://zweidenker.de/en/) at mail@zweidenker.de.
 
