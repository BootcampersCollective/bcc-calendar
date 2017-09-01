# Project Title

BCC Calendar AngularJS module.  This package is to create a calendar that can be used in Bootcampers Collective projects.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to install node (at least v6)
Mac installation (brew):
```
brew install node
```

PC installation:
```

```

You will need to install yarn
Mac installation (brew):
```
brew install yarn
```

PC installation:
```

```

You will need to install gulp
Mac installation (brew):
```
yarn add gulp --global
```

PC installation:
```

```

### Installing

Once everything has been installed, to get your development environment running:

First install the prerequisites from yarn.

```
prompt> $ yarn
```

You should see this returned:

```
yarn install v0.27.5
warning ../../../package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 4.35s.
```

run gulp

```
prompt> $ gulp
```

You should see this returned:

```
[17:10:14] Using gulpfile ~/websites/bcc/bcc-calendar/gulpfile.js
[17:10:14] Starting 'dev:clean'...
[17:10:14] Finished 'dev:clean' after 4.44 ms
[17:10:14] Starting 'lint'...
[17:10:14] Starting 'dev:vendor'...
[17:10:14] Starting 'dev:scripts'...
[17:10:14] Starting 'dev:styles'...
[17:10:14] Starting 'serve'...
[17:10:14] Webserver started at http://localhost:8000
[17:10:14] Finished 'serve' after 10 ms
[17:10:14] Starting 'watch'...
---Starting Watch task---
[17:10:14] Finished 'watch' after 20 ms
[17:10:14] Finished 'lint' after 553 ms
[17:10:14] /Users/wsong/websites/bcc/bcc-calendar/dev/scripts/bcc-calendar.min.js reloaded.
[17:10:14] Finished 'dev:scripts' after 546 ms
[17:10:14] /Users/wsong/websites/bcc/bcc-calendar/dev/styles/bcc-calendar.css reloaded.
[17:10:14] Finished 'dev:styles' after 549 ms
[17:10:19] Finished 'dev:vendor' after 5.17 s
[17:10:19] Starting 'default'...
---Starting Default task---
[17:10:19] Finished 'default' after 33 μs
```

That should be it, open up your favorite browser and go to http://localhost:8000 and see if you see the test page.

<!-- ## Running the tests -->

<!-- Explain how to run the automated tests for this system -->

<!-- ### Break down into end to end tests -->

<!-- Explain what these tests test and why -->

<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->

<!-- ### And coding style tests -->

<!-- Explain what these tests test and why -->

<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->

## Build

If you are building this to publish to a private NPM or as a custom package:

```
prompt> $ gulp dist
```

## Built With

* [AngularJS](https://angularjs.org/) - The web framework used
* [Gulp](https://gulpjs.com/) - Dependency Management
* [SASS](http://sass-lang.com/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Wesley Song** - *Initial work* - [PurpleBooth](https://github.com/enkhi77)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Bootcampers Collective
* The AngularJS people for building such a useful framework
