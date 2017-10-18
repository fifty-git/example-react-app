# Example React App
This repository's primary purpose is to examplify different React.js patterns as well as serving as an example
Webpack setup for compiling JSX and ES6 onward back to ES5.

**This project requires a minimum of Node.js version 8.6.0 to function properly.**

### Build
Once you have cloned the local repository, install yarn globally:

```
npm install -g yarn
```
For package management, I recommend using yarn instead of npm for several reasons. See ![this article](https://medium.com/@nikjohn/facebooks-yarn-vs-npm-is-yarn-really-better-1890b3ea6515) for some of the reasons.

Once you have yarn installed, in the repository, use the below command to install all of the project's dependencies.
```
yarn install
```

Now that all of the dependencies are installed, run the 'start' script and
```
yarn run start
```

Next navigate to ![localhost:8080](127.0.0.1:8080) to see the finished project.


### Current React.js Patterns:
 - Container and Presentation Components
    - See ![PlanetListContainer](https://github.com/fifty-git/example-react-app/blob/master/src/components/container-presentation/planetListContainer.jsx) to start
 - Popups with brackground overlays and dynamic bodies
