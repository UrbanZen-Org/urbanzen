# Urban Zen Wordpress Development Documentation (urbanzen.com)

This documentation is for the wordpress portion of urbanzen.com.
The shopify site is stored on git at https://github.com/UrbanZen-Org/uz-shopify.

## Codebase
The code for the site is stored on Github.
https://github.com/UrbanZen-Org/urbanzen

##### Deployment
 Deployment to the server is done through git hooks. 
 Setting up the hooks is done as follows.

```sh
 git remote add production root@50.28.12.201:/srv/uzstage/remote-repo
```
To push code changes to the site, make your change on the 'master' branch.

```sh
 git commit -m "My change on the master branch"
```
 Then push the change normally to master.
```sh
 git push
```
  Then push master branch to the remote branch you set up earlier.
 ```sh
 git push production master
 ```
 To look deeper into the hook, let's look at the server setup.
 
## Server
 The site is hosted on Liquid Web.
 The Web Host Manager can be accessed at https://host.urbanzen.com:2087
  The site root is located at ```/home/urbanzen/public_html```
  **Don't touch the files in the document root!**
  
  The codebase, as mentioned above, is managed through git.
  
  Now, I'll explain the server setup for reference.
  The git repo is in the ``` srv/uzstage/ ``` folder, inside of ``` remote-repo ```.
  The ``` mc-creds.php ``` and ```wp-config.php ``` are both used in the wordpress and are symlinked to the root directory, as these files are not inside the git repository.
  
  If changes need to be made to the git hook, it is located at ``` srv/uzstage/remote-repo/hooks/post-receive ```
  

 
## Wordpress
The wordpress core is part of the repository, and must be updated, commited and pushed from the repository.
The wordpress theme is called 'uz2017' and is built on top of the plugin 'Timber' for twig templating and 'Advanced Custom Fields' for custom data. Images are hosted on Amazon S3 using the plugins 'WP Offload S3 Lite' and 'Amazon Web Services'.

#### Image Hosting
 As mentioned above, images are hosted on Amazon S3 using the plugins 'WP Offload S3 Lite' and 'Amazon Web Services'.  The bucket they are stored in is called 'urbanzen.com-wp'.  No images are stored on the server, and are instead all served from Amazon.

## Local Development
Local development is done through a local server setup (ie. MAMP) using the git repository as the root of the setup.
An example configuration is a MAMP setup with document root set to git folder.
Database backups are done through the plugin 'All in One Wordpress Migration'. Please only use this plugin to restore the database to your local setup. Click on advanced options, and check every option *except* 'Do not export database (sql)'  This plugin is also used to move new content to the local setup periodically. For the most part, it should not be used to other way around, so as not to overwrite updates to the live database.

#### Theme development with Timber / Twig / Advanced Custom Fields
Documentation:
https://timber.github.io/docs/
https://twig.symfony.com/doc/2.x/
https://www.advancedcustomfields.com/resources/

The theme is called 'uz-2017' and is located at ``` wp-content/themes/uz-2017 ```.  The theme is built on twig templates using Timber, documentation for twig/Timber is linked above.
Advanced Custom Fields is used to customize Wordpress pages, documentation for ACF is also linked above.

##### Theme Dependencies
Documentation:
https://docs.npmjs.com/

Theme dependencies are managed through npm, look at ``` package.json ``` in the root for more information on the npm setup.

##### SCSS/JS Development
Documentation:
https://webpack.js.org/guides/
http://sass-lang.com/documentation/file.SASS_REFERENCE.html

SCSS/JS Development is compiled through 'webpack'. The files are located in ``` src/scss ``` and ``` src/js ```, respectively. 
The main SCSS file is ``` src/scss/main.scss ``` and it is compiled to ``` wp-content/themes/uz-2017/assets/css/main.css ```
The main JS file is ``` src/scss/main.js ``` and it is compiled to ``` wp-content/themes/uz-2017/assets/js/main.js ```

The files are compiled through webpack with npm.
This command will watch the src directory for changes using webpack:
``` sh
npm run watch
```
