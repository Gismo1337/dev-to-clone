
## Demo

![APP PREVIEW](https://github.com/Gismo1337/dev-to-clone/blob/main/assets/DevClonePreview.gif)


## Requirements

[Expo](https://docs.expo.dev/)
[Firebase](https://console.firebase.google.com/)

## Installation

### 1) Download the project

Open the project path in terminal.
```bash
  git clone https://github.com/Gismo1337/dev-to-clone
  cd dev-to-clone
  npm install  
```

### 2) Create the database

Visit https://console.firebase.google.com/
1. Create new project
2. Name the project -> click next
3. Disable Analytics -> click next
4. Wait until create -> click next
5. Chose 'Firestore Database' in navigation
6. Click create database
7. Choose 'start in testmode' -> click next
8. Choose server destinatin near your location -> click next
9. Click the projectoverview at top of navigation
10. Add firebase as web by click on icon </>
11. Name the app
12. Click create

#### You see the needed credentials likle this:

``` 
apiKey: "AIzaSyAtxgrnlAtGXV-OdwMVngC6KmLZXG1BQwQ",
authDomain: "test-bf771.firebaseapp.com",
projectId: "test-bf771",
storageBucket: "test-bf771.appspot.com",
messagingSenderId: "920493813599",
appId: "1:920493813599:web:a35040e0933196768390ea"
``` 
save this for later in a random txt file.

### 3) Enviroment File

Copy env.template
Rename the file to .env
Open the .env file and paste the credentials from your random txt file into the .env file.

``` 
API_KEY=AIzaSyAtxgrnlAtGXV-OdwMVngC6KmLZXG1BQwQ
AUTH_DOMAIN=test-bf771.firebaseapp.com
PROJECT_ID=test-bf771
STORAGE_BUCKET=dtest-bf771.appspot.com
MESSAGING_920493813599
APP_ID=1:920493813599:web:a35040e0933196768390ea
``` 

### 4) Start the Expo Server
1. Open the project path in terminal.
2. (Re)Start server with clean cache by running `expo start -c`