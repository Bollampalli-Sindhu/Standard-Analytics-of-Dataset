# Standard Analytics on Dataset

## Installations

### Packages
- Python
- npm install -g npm
- pip install django djangorestframework

### Downloads
- Apache 2.4 - `https://www.youtube.com/watch?v=Eg0M5x-BBGw`
- php - `https://www.youtube.com/watch?v=lb50xBGWa2A`
- phpmyadmin `https://www.youtube.com/watch?v=f8le4eawDHQ`

### Extensions for VsCode IDE (OPTIONAL)
- Prettier
- Python (microsoft)
- Django (batisteo)
- React (ES7 react)
- JavaScript (ES6)

### Additional Installations
- Go inside that frontend1 app directory
- Execute a command => `npm init -y`. It creates node modules, package Json
- Then execute => `npm i webpack webpack-cli --save-dev` => this installs webpack => lets us compile JavaScript modules, also known as module bundler=> bundles together all the js code into one single file.
- `npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`
- `npm i react react-dom --save-dev`
- `npm install @material-ui/core` - prebuilt components that we can use to avoid to style the webpage ourself.(similar to bootstrap).
- if error occurs in the above installation => `npm install @material-ui/core --force`
- `npm install @babel/plugin-proposal-class-properties` - need this to use `async` and `await` in our javascrpt code.
- `npm install react-router-dom`
- `npm install @material-ui/icons --force`
- `npm install --save styled-components`
- `npm install react-icons/fa`


## Execution

#### Open Terminal
-Open a terminal in "Standard-Analytics-of-Dataset" directory as pwd
-Open a second terminal in "Standard-Analytics-of-Dataset/frontend1" directory as pwd

#### Run the npm
In second terminal, run commands:
-`pwd` (you should be in frontend1 directory, check)
-`npm run build`

#### Run the webserver
In first terminal, run commands:
-`pwd` (you should be in Standard-Analytics-of-Dataset directory, check)
-`Python .\manage.py runserver`
