We have movielist that renders movie component amount of times in its state
and we have a nav component that is going to show movie amounts
basically it needs the same state

solution 1
lifting the state up
that means we will move the state into app.js and pass it down to the props
through movies and movie
downside: movies state doesnt belong in app.js

solution 2
context api





solution 3
redux