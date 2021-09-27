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
