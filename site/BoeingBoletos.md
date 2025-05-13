{
"title" : "Boletos, Boeing ticket system",
"layout": "blogpost",
"publishDate": "2023-09-25"
}

![](file:///web/files/success/2023-Boeing-Boletos.png width=800px)

The Boeing final assembly plant is located in Everett Washington and is the largest building by volume in the world ([more infos](https://science.howstuffworks.com/transport/flight/modern/boeings-everett-facility-is-largest-building-on-earth.htm)). The factory includes final assembly lines for the venerable 747, the 777, and the new composite based 787 Dreamliner. The factory is located on Paine Field, and includes a visitor center known as the [Boeing Future of Flight](https://www.boeingfutureofflight.com). The web application that handles ticket sales for events at the Future of Flight is getting its third rewrite in its nearly 20 years of service. The last one was a rewrite from Java to Ruby on Rails in 2005 and was designed to look best on 640x480 pixel screens! Boeing purchased the Future of Flight operation from the county in 2019 and has been expanding its offerings. When proposing some new kinds of experiences, it became clear that the old reliable system had reached its limits. After a survey of available systems on the market, the decision was taken to stick with a custom design and begin working on a replacement.

![](file:///web/files/success/2023-Boeing-Boletos2.png width=800px)

The ticket system for Boeing has unique requirements. Tours occur on a schedule and have limited capacity. General admission tickets to the center have no fixed inventory component. Boeing has begun offering special events and workshops. Each of these different activities has specific and unique requirements. The system also serves multiple classes of users from self-service sales to the public to on-site counter agents and even a call center with telephone service reps. The decision was taken to replace the older system with a new more flexible design based on Pharo Smalltalk and Seaside. The system, called Boletos, allows flexible scheduling and rescheduling of visits, and assembly of visit packages for groups and tours as well as payment processing, barcode scanner-based ticket taking, and provides a variety of reports on visitor demographics.
