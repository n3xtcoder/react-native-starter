# react-native-starter
## Requirements
node >4


## Setup

```
git clone ...
npm install
npm install -g react-native-cli
```
### Development server

In order to see changes during development, react native runs a development server. You can run this with:

```
# through npm
npm start
# or directly
node node_modules/react-native/local-cli/cli.js start
```

This server depends on Watchman so if you do not have it installed, then install with:

```
brew install --HEAD watchman
```

Common problems can be solved here: http://facebook.github.io/react-native/docs/troubleshooting.html

### Android


```
# Install the sdk
brew install android-sdk
```

Ensure your java and android environmental config is in place you should have the following set:
```
env | egrep 'JAVA_HOME|ANDROID_HOME'
ANDROID_HOME=/usr/local/opt/android-sdk
JAVA_HOME=/Library/Java/Home
```
Otherwise in bashrc (or equivalent):
```
# .bashrc
export ANDROID_HOME=/usr/local/opt/android-sdk
export JAVA_HOME=/Library/Java/Home
# then reload
exec bash
```
Follow these instructions to configure the Android sdk: https://facebook.github.io/react-native/docs/android-setup.html

### iOS

Open `ios/N3xtcoderArya.xcodeproj` and hit run in Xcode.
Open the `index.ios.js` in your editor of choice




## Notes

Android emulator can be tricky:
```
android create avd -n myavd -t 1 --abi default/x86_64
