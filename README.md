# Morgage Calculator

A mortgage calculator web app built with React to aid in the planning of morgages.

## User Stories

Users can set purchase prices.\
Users can set down payment.\
Users can set repayment time.\
Users can set interest rate.\
Users see theirloan amount (purchase price - down payment).\
Users can see  the estimated amount they'll pay on a monthly basis.\

In the project directory, you can run:

### `Formula Used`

Formula for mortgage payments: M = P[r(1+r)^n/((1+r)^n)-1)].\
M = the total monthly mortgage payment.\
P = the principal loan amount(Purchase Price - Down Payment).\
r = your monthly interest rate.\
n = number of payments over the loan’s lifetime.\

### Using Docker

### Pre-requisite

- Docker Desktop for Mac/Windows/Linux

### Getting Started

- Clone the repo

```
git clone https://github.com/ajeetraina/Mortgage--Calculator-React
```

- Build the Docker Image

```
docker build -t ajeetraina/mortgage .
```

- Run the app

```
docker run -d -p 3000:3000 ajeetraina/mortgage
````

Open https://localhost:3000 to access the app

<img width="552" alt="Screen Shot 2022-05-26 at 7 43 57 AM" src="https://user-images.githubusercontent.com/313480/170401499-e6df0a87-594a-4851-baa7-aebbe7ebbce5.png">


### Manual Method


`npm install && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
