# Resume
Welcome to my resume

## Dependencies
* Node.js 10.13.0 or later

## Installation
Install all packages using `yarn install`

## Usage

### Development
Start the application in development mode using `yarn dev`

Navigate to [localhost:3000](http://localhost:3000) to run and debug the application

>If you are using VSCode you can press <kbd>F5</kbd> to start debugging

### Linting
To lint the your code run `yarn lint`

>If you are using VSCode your code will be automatically linted on file save

### Production
To create a production build use `yarn build`

To start the generated production build use `yarn start`

### Docker
To create a deployable docker image use `docker build . -t resume`

To start the generated docker image use `docker run -p 3000:3000 resume`

## Built With
*  [Next.js](https://nextjs.org/) by Vercel - The React Framework