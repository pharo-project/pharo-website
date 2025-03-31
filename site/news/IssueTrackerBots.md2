{
"title": "Issue Tracker: Some Automatisation",
"layout": "blogpost",
"publishDate": "2019-03-21"
}

We added some bots to the [pharo GitHub repository](https://github.com/pharo-project/pharo) 

- Work In Progress
  - Prevent merging of Pull Requests with "WIP" in the title
  - [https://github.com/marketplace/wip](https://github.com/marketplace/wip)	


- No Response
  - Closes Issues where the author hasn't responded to a request for more information
  - If the tag more-information-needed is set and no answer provided, issue is closed in 14 days.		
  - [https://probot.github.io/apps/no-response/](https://probot.github.io/apps/no-response/)


- Request Info
  - Requests more info on issues and pull requests with the default title or an empty body.
  - it sets the more-information-needed flag to trigger the No Response Bot.
  - [https://probot.github.io/apps/request-info/](https://probot.github.io/apps/request-info/)

		
- Stale
  - Close stale Issues and Pull Requests
  - [https://github.com/probot/stale](https://github.com/probot/stale)
  - Issues: daysUntilStale: 240, daysUntilClose: 60
  - Pulls:  daysUntilStale: 20,  daysUntilClose: 10
