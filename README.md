 Project structure
 
Project
 |
 |--app\              (front-end application)
 |
 |--bower_components\ (front-end dependencies)
 |
 |--node_modules\     (back-end dependencies)
 |
 |--server\           (back-end application)
 |
 |--templates\        (back-end templates)
 |
 |--app.js            (main app module)
 |
 |--bower.json        (bower package installer)
 |
 |--gulpfile.js       (task manager)
 |
 |--index.html        (main page)
 |
 |--package.json      (npm package installer)
 |
 |--README.md         (setup instruction)
  
Setup based on LINUX 
  
1. Check your OS bit

  You can also use the “file” command with a special argument (“/sbin/init”) to find out whether your system is 32-bit or 64-bit.

  Type the following command and press Enter:

  file /sbin/init

2. Installing NVM (Node Package Manager)

  nvm install 0.10.13

3. Show list of nodejs versions

  nvm ls-remote

4. Installing (reference to your OS)

  shows all avaible versions on nodejs
  nvm ls-remote node

  install 
  nvm install v.6.***

5. Check nodejs version and location

  node -v which node js

7. Download projects

  git clone https://github.com/romangrb/mean-stack-setup-es6.git

8. Install packages to projects, run the bash and execute the following commands :
 
 (to install node.js dependencies)
  
  npm i

 (to install front-end dependencies)
 
  bower i 

9. Run project:

  gulp
  
  it also shows you ipAddress & port to preview, 
  you can change it in gulpfile in line gulp.task('connect'....

  this styleguide for angular1 es6 is refering to 

  https://github.com/toddmotto/angular-styleguide
  https://github.com/rwwagner90/angular-styleguide-es6

  both of them is extending from John Papa styleguide
  
  https://github.com/johnpapa/angular-styleguide

10. Configure database

  import database
  
  run mongo service (not close this service):
    - mongod
  run mongo client (in another terminal):
    - mongo
  import database  :
    - mongoimport --db mongodb  --file mongodb.json 
  check collection :
    - mongo
    - use mongodb         (use collection [name])
    - db.mongodb.find()   (must show all imported collections)
    
  export database
  
  run mongo service (not close this service):
    - mongod
  run mongo client (in another terminal):
    - mongo 
  show list of databases
    - show dbs 
  quit to bash
    - press ctrl+C
  export to file system
    - mongoexport --db databaseName --collection collectionNaame --out fileName.json
  npm install -g browserify npm install babelify browserify -d -e app.js -o bundle.js -t [ babelify --modules common]`
  