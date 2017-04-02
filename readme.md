# Chuck Norris Joke Application
This is one of my first react/redux applications. To compile the source I used webpack. You can find the case I used [here](https://github.com/raldenhoven/chucky/blob/master/case.pdf). I did not implement the function to automaticly add a random joke every 5 seconds to the favorite list.

### Todo:
* Write tests
* Add animations
* Implement warnings (Could not add to Favorites because there are already 10 items)
* Create Github Pages Page (Basicly the content of the app folder)

## Instalation

* Clone this repo
* Run ```npm install``` from your local repo directory
* Run ```npm run build``` to compile the source

## Debuging / Viewing the app
For the local development I used browsersync, this has the added bonus that it also serves as a local server. To launch browsersync simply use the ```npm run watch``` command.

## The Source
I followed the basic / advanced examples for creating this demo application (Used sources can be found at the end of the file). A basic knowledge of React and Redux is expected when reading the source.

## Testing
At the moment I still need to write the basic tests


## Stuff I used to make this

 * [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) so I could get to know the core concept
 * [Using Redux with React](http://redux.js.org/docs/basics/UsageWithReact.htmlf) To understand Redux and how it works with React
 * [Persisting the state to localstorage](https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage) A very easy way to implementing persistent favorites
 * [Writing test with redux](http://redux.js.org/docs/recipes/WritingTests.html) How to write jest tests for redux