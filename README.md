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

## Running on a real device
Debugging your Android builds on a real device is a much better experience than through the emulator.

Enable Developer options on your Android phone if you don't have the already. Go to your Settings app, navigate to `About phone` and tap seven times on `Build number`.

Enable USB debugging in the Developer options of your Settings app. 

Plug in your device and run `react-native run-android`. Then run `adb reverse tcp:8081 tcp:8081` to connect to your development server.

[More info](http://facebook.github.io/react-native/docs/running-on-device-android.html)


### iOS

Open `ios/N3xtcoderArya.xcodeproj` and hit run in Xcode.
Open the `index.ios.js` in your editor of choice


## Running on a real device

You have 2 options:
* Use the development server: Open `ios/N3xtcoderArya/AppDelegate.m` in Xcode and change `jsLocation` to the IP address  of your macbook on the local network (normally the output of `ipconfig getifaddr en1`).
* Use an offline bundle: Open `ios/N3xtcoderArya/AppDelegate.m` in Xcode and comment out the `jsLocation` in Option 1 and enable Option 2 (ie. remove the comment).

Then open Xcode, select your device in build targets (top left next to the play button) and hit run. 

If you are doing this for the first time, you will need to update settings on the device to trust your itunes account as a developer. Go to settings > general > Device Management, then select your app and hit "Trust".
[More info](http://facebook.github.io/react-native/docs/running-on-device-ios.html)


## Notes

For iOS 9.3 devices you'll need Xcode 7.3.

Android emulator can be tricky:
```
android create avd -n myavd -t 1 --abi default/x86_64
```
