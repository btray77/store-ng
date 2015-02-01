store-ng
==========

[![wercker status](https://app.wercker.com/status/e115eef144560e16f26e4979cec78b28/m "wercker status")](https://app.wercker.com/project/bykey/e115eef144560e16f26e4979cec78b28)

[Link to HipChat Room for Support](https://www.hipchat.com/gWgE1EkYF)

## Install Bower and Gulp

    npm install -g bower gulp

## Install Store packages

    npm install

## Workflow with gulp

### Build Store
Builds project and moves files on the destination folder, dist, which is used for running the application in production. This step currently concats and minifies the CSS and JS, compiles LESS and runs JSHint.

    gulp build

### Run Client in Development Mode
Adds watcher on a changes in css, scss, js, html and images. Upon detection of a change the content is update and the browser is reloaded.

    gulp build && gulp dev
    or
    gulp build && gulp serve

### Run Unit Tests
Not configured yet. Will be realized in the near future

    gulp test

### Also useful are the following commands
    gulp jshint // check js on errors
    gulp sass   // Makes compilation sass to css
    gulp clean  // Removes the _dist_ folder

### How start with Vagrantfile
Clone ottemo/store-ng github repo. The vagrant instance will start with nginx available at http://localhost:8888 - You can use gulp serve as well and will find your web site at http://localhost:8080

    vagrant up
    vagrant ssh
    sudo su -
    cd /vagrant
    gulp serve (this will take a few minutes to start)

### How to run ottemo/foundation docker container
Pull latest image from docker hub

    docker pull ottemo/store-ng

Start the container and access locally

    docker run -d -p 80:80 -t ottemo/store-ng

## Contribute to Ottemo Store development
We use git-flow internally, but if you do not like git-flow you may use [this document](CONTRIBUTOR.md) as an alternative.

Below is a mini quickstart if you are new to git-flow and can't wait to jump into the code.

### Initialize git-flow

    # fork or clone Ottemo Storefont like below
    $ git clone https://github.com/ottemo/store-ng.git

    # init git-flow, (git-flow must be installed for your OS locally)
    $ git checkout master
    $ git checkout develop
    $ git flow init -d

### Start a feature branch
    $ git flow feature start <FEATURE-NAME>

### Issue a pull request on github
    $ git push -u origin <FEATURE-BRANCH>
    # if you have git aliased to hub otherwise use the github web interface
    $ git pull-request -b develop

### Delete the local branch
    $ git branch -d <FEATURE-BRANCH>


## License

[MIT License](LICENSE.md) Copyright 2015, Ottemo, Inc

## Terms and Conditions

All Submissions you make to Ottemo, Inc. (“Ottemo”) through GitHub are subject
to the following terms and conditions:

1.	You grant Ottemo a perpetual, worldwide, non-exclusive, no charge, royalty
free, irrevocable license under your applicable copyrights and patents to
reproduce, prepare derivative works of, display, publically perform, sublicense
and distribute any feedback, ideas, code, or other information (“Submission”)
you submit through GitHub.

2.	Your Submission is an original work of authorship and you are the owner or are legally entitled to grant the license stated above.
