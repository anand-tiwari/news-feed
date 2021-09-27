# News-Feed-ui

It's for showing news feed in list view from new york times

## Installation

Use the package.json file for stating local server

for installing dependency 
```bash
npm i
```

for starting dev server connecting to different server 
In this case NYT
```bash
npm run dev-nomock
```
for running unit test
```bash
npm run unit
```

for running unit test with local sonar setup
you may have to start local sever can download from
```https://www.sonarqube.org/downloads/```
```bash
{directory where sonar in installed}./sonar.sh console

example - 
./Downloads/sonarqube-6.7.7/bin/macosx-universal-64/sonar.sh console

then we can run below command

npm run test:sonar-local
```

for create build for release deployment
```bash
npm run package-release
```

for create build for snapshot deployment
```bash
npm run package-snapshot
```


How App is working
--------------------
1. sidebar 
   1. Its an overlay that will be useful in smaller devices to see other section apart from home.
   2. In Desktop or monitor we can show all other available news feed section in header, 
   3. but not possible in smaller device where we have "hamburger" menu to select other section of new feed.
   4. how to close sidebar ??
      1. If we click anywhere apart from sidebar menu it will get closed.
      2. For this i had created a directive to close on outside click

2. In header section
   1. we have section first is for Feed Website Name, and "hamburger" menu in left side useful for give more options in smaller device
   2. second is show other available news feed section. (click on them to fetch news feeds from that type section)
      1. In smaller device we will hide this section but can be accessible through "hamburger" menu.

3. List of feeds from selected section(FeedList.Vue) default is home section
   1. we are showing limited information in list view manner
      1. News feed title
      2. Absolute Description
      3. Last updated Date
      4. written by (author)
      5. Image from the news feed
   2. All the above Information are bundled in one component ( Feed.Vue)
   3. Each element in list view is responsive in nature how to display in different size of screen.
   4. All of them are aligned in the same vertical line then though if our feeds title is smaller of bigger than others.
   5. We have option to add news feed as bookmarks.


4. How we are handling Bookmarks
   1. All the bookmarked news feeds I am storing inside localstorage.
   2. So that we can retrieve them even after we do hard reload the page.
   3. we can add/remove news feed from home page (section type page)
      1. click on the bookmark icon to toggle news feed behaviour
   4. we can also remove feeds from bookmark page by clicking close icon from top right corner.
   5. how to access bookmark page ?
      1. we can see the link in header section type
      2. Or from "hamburger" sidebar section


5. How we are showing Information in Detail Page
   1. When we click on any of feeds i am using news feed title and convert that into Id (replacing space( " ") with hyphen (-))
   2. Id = title converted into single string by replacing space with - 
   3. and storing that info in localStorage { Id: { new feed Object } }
   4. Detial page Url - /detail/Id
   5. When we open Details based on the fetch Id from url and based on Id fetch News Feed Detail from localStorage
   6. Why i am storing Info in localStorage
      1. Because i didn't find any api in NY times where i can get specific feed details So for my development i have to go with localStorage


6. config module
   1. config module to store api path and api base_path that needs to be there in every api path. In our case its empty

7. Pages
   1. we have 2 pages
      1. ListPage - to display list view of all the news feed for selected type
      2. BookmarkPage - to display all bookmarked news feed


7. Store
   1. create 'feed' module , to expose modular store structure

8. utils
   1. this folder contains generic function that can used across the project
      1. http-api.js
         1. this contains generic code for get/post method calling & error handling part. for any api call we just have to call this method.
      2. storage.js
         1. localStorage read/write error handling is written in one common place. and exposed method that we can use to use localStorage


Documentation
------------------
This project contains all other setup like
```bash
https apis call,
mock api request/response setup
router
vuex store
responsive scss
```
it won't require any setup level changes we just have to mention backend api path and start with staging mode
Let's see each of modules.

src
------
src module contains all the source code

api
-------
if we need to have any backend api call we have mentioned define a method for that api
and we can use that method inside action(vuex store)


api-mock
-------
this is to replicate a mock request/response for backend api call
when we run
```bash
npm run dev
```
it automatically start using this mock api.


assets
-------
it contains scss and images that we have to use in code.

components
----------
it contains all .vue components


config
--------
this is place to define

	static text
	backend api path
	that we are going to use in project


directives
----------
we can define our directive over here that we can import in our project

```implemented a directive to close sidebar on the click anywhere outside of sidebar```


pages
------
it contains all the landing pages.
ListPage (on route /section/:sectionName) to display news feed from that section
BookmarkPage (on route /section/bookmark) to display all bookmarked news feed

router
--------
for configuring all the route and corresponding vue component to render.


store & plugins
---------------
this is place to define store modules and plugins to attatch them with vuex

i have stockSocket plugin and attached it to store to get all the event for 'onmessage' and get called veux action

	benifits
		components are lossely coupled
		easy to test compoent and socket separately
		and we can add a new or remove any web sockets without touching components (SOLID principle)


utils
--------
to define all utilities that we need across different component.
to have some logic that should not be part of component.
example -
api call generic template
param serialization for api calls


main.js  & App.vue
----------------------
Start of the project. vue app creation

.env
----------
```bash 
.env.{mode}
```
mode - development, production, staging

to configure some property based on environment


vue.config.js
------------
to override or configure vuejs webpack configuration


build
----------

contains dockerization and release build related code.

	config.js
	----------
	to proxy backend api to connect with ui if needed

	index.js
	--------
	to run build code.
	if we wanted to check how our build works we can use this to run code in local to see.
	npm run build - (it will create build)
	npm run preview - (it will run build code in local server)

	packager.js
	------------
	create snapshot or release build code
