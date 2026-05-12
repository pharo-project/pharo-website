{
"title" : "ApptiveGrid - Digitize and Automatize Business Processes",
"layout" : "blogpost",
"publishDate" : "2024-02-26"
}

ApptiveGrid is a SaaS tool to digitize and automatize business processes.

On the one hand ApptiveGrid is visual database that enables you to model your database via web frontend. At the same time this model is available via REST API. 

![](file:///web/files/success/2024-02-ApptiveGrid1.png width=800px)

On top of the data model, a form creator turns your model into a form that you can send e.g. via email to inquire data from other people.

![](file:///web/files/success/2024-02-ApptiveGrid3.png width=800px)


On the other hand, ApptiveGrid is a workflow system where you can define your workflow in the web frontend and connect to events. These events are either internal (resulting from a change in your data model) or external where you can use webhooks to kick of workflows.


![](file:///web/files/success/2024-02-ApptiveGrid2.png width=800px)


With the combination of both parts, ApptiveGrid is able to solve many of modern digital workflows. It enables you to make it for a low cost and in almost no time which are two pretty good reasons to use it.


Get your free account today to try it yourself!  [https://www.apptivegrid.de](https://www.apptivegrid.de)


## About the tech stack

- The business backend of ApptiveGrid is 100% [Pharo](https://pharo.org)
- It uses [Zinc Components](https://github.com/svenvc/zinc) for the HTTP frontend
- and [Soil](https://github.com/ApptiveGrid/Soil) as the persistence solution.
- Each user has its own database (an empty soil database is 24kb on disk).
- one Pharo image holds multiple soil databases open and provides memory caching for the objects
- routing of requests is done with haproxy connection persistence
- the web frontend is made with Vue.js and a Pharo library that we transpile to JS with PharoJS

## More Infos

- Contact: kontakt@apptivegrid.de
- Website: [https://www.apptivegrid.de](https://www.apptivegrid.de)

