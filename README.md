## react-navigation-stack isFocused issue

Repro steps:

1. Navigate to details
2. Swipe back immediately
3. See focused state not change

NOTE: If you tap the back button, focused works just fine.

### Setup

`cd ios`
`pod install`
`cd ..`'

### Start

`npx react-native run-ios`
