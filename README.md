# Front-End Engineer Test
Test for a Front-end Engineer at FanDuel

## Technical Spec
- React.js (with Next.js) Isomorphic Web Application
- Jest testing suite
- SASS CSS compilation and component sandboxed CSS
- Server Side Rendering - entry route will SSR
- Page Routing and 404 errors built-in
- Page Templating / Master Layout with responsive HTML/CSS

## Issues and what can be done better
- Had issues configuring my test runner (Jest) in conjunction with Babel and Styled JSX (within my components)

## Getting started
```
git clone https://github.com/PBTests/FanDuel
cd {location of the project}
npm install
npm run dev
```

## Where am I looking?
The development instance should be available at:
```
http://localhost:3000
```

## Running tests
There are a number of integration tests that can be initiated by running the following:
```
npm run test
```

## Getting a production build
To build a production version please run:
```
npm run build
```
or 
```
npm run export
```
and check out the "out" directory that'll be created.

## Demo 
```
https://fanduel-prod.pbuon.now.sh
```
