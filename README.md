# Features

meuMagazine is a custom company branded iOS and Android app to distribute digital publications. Users access your Newsstand within the app, and therefore your full content catalogue.

- News Feed
- Calendar
- Download publications to read offline
- Restricted Access
- Push notification
- Target Audience

# Tech

meuMagazine uses a number of open source projects to work properly:

* [MobileAngularUI] - awesome mobile UI framework
* [PhoneGap] - open source framework to create mobile apps using standardized web APIs
* [meumobi] - mobile site builder

PhoneGap Plugins:
* [com.jcjee.plugins.emailcomposer] - Email Composer with Attachments
* [org.apache.cordova.device] - Cordova Device Plugin
* [org.apache.cordova.file] - Cordova File Plugin
* [org.apache.cordova.file-transfer] - Cordova FileTransfer Plugin
* [io.github.pwlin.cordova.plugins.fileopener2] - File Opener2 Plugin
* [nl.x-services.plugins.toast] - Toast PhoneGap Plugin

# Install

```bash
## Installing required tools
$ sudo npm install -g bower gulp phonegap

## Clone Repository
$ git clone "https://github.com/meumobi/meuMagazine.git" && cd meuMagazine

## Install dependencies
$ bower install
$ sudo npm install

## Build your project for the first time
$ gulp build

## Test/Debug in a Web Browser
$ gulp
```

# Run App with PhoneGap
With TARGET = {iOS|android}
```bash
$ phonegap run TARGET
```

Contributing
----

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

License
----

MIT

**Free Software**

[org.apache.cordova.device]:https://github.com/apache/cordova-plugin-device
[org.apache.cordova.file]:https://github.com/apache/cordova-plugin-file
[org.apache.cordova.file-transfer]:https://github.com/apache/cordova-plugin-file-transfer
[io.github.pwlin.cordova.plugins.fileopener2]:https://github.com/pwlin/cordova-plugin-file-opener2
[nl.x-services.plugins.toast]:https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
[meumobi]:http://enterprise.meumobilesite.com/
[@meumobi]:http://twitter.com/meumobi
[MobileAngularUI]:http://mobileangularui.com
[PhoneGap]:http://phonegap.com
[com.jcjee.plugins.emailcomposer]:https://github.com/jcjee/email-composer.git 
