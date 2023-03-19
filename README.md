# Tic-Tac-Toe
## [play game](https://github.com/Pma913/Tic-Tac-Toe/settings/pages#:~:text=https%3A//pma913.github.io/Tic%2DTac%2DToe/)

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
I built a tic tac toe board. The app features an easy to use game that can be played as many times as you want and the progress is saved even across page refreshes. The app can be reset at any time the player wants to start over fresh. This offers a no frills version of a familiar favorite game. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork and clone this repo.
2. Type `cd tic-tac-toe` to move into the root directory.
3. Run `open index.html`.
4. The app should now be up and running.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

![quick screen play](https://media.giphy.com/media/hXfOiJi3mlWTDNiaN7/giphy.gif)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

I built this app from the ground up. a fair amount of time went in to getting the repo set up and getting the guidelines of my work goals set up. After that, most of my time and energy went into javascript and logic. I worked about 18-20 hours on this build over all.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
[Patrick Ankiewicz](https://www.linkedin.com/in/patrick-ankiewicz/)

### technologies used
- javascript
- CSS
- HTML

### Learning Goals:

1. Demonstrate an understanding for DRY javascript
2. Understanding data model and DOM
3. Iterate through DOM elements using for loops
4. Use problem solving techniques to tackle a large project.

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

- The main win was the project as a whole! There were quite a few instances where I got stuck and had to use psuedo code to find a solution. It was nice to get confirmation that my practices are effective.
- A more specific win was getting the player turn to display correctly after the board resets. This was a large struggle for me. The culprit in the end was repeated lines of code, where in some instances it didn't effect my dom, but in other instances a method would be called when I didn't want it to. The solution was DRYing up the code. I had a couple large functions, both of witch called some of the same functions within them, so I went to work cleaning them up and doing my best to make sure a function was only called more than once if it was neccessary. 
- A third win would be figuring out local storage. This was not terribly difficult, but was a new concept and was fun to learn about and implement into my code. A couple of snags when trying to incorporate the stored code into my data model, but I quickly overcame those struggles with some well directed console logs that helped me locate the data I was missing. 
