# react-native-hidden-action
Performs a "hidden" action when the user clicks several times quickly on this component (like the secret developer action in Android Settings)

## Usage
By default, the `action` will be performed after the component is tapped 8 times in rapid succession (max 3 seconds between taps). To customize this behavior, see the props available below.

```jsx
import HiddenAction from 'react-native-hidden-action'

<HiddenAction action={() => alert('Secret message!')}>
    <Text>Click me!</Text>
</HiddenAction>
```

## Installation
```bash
npm install --save react-native-hidden-action
```

## Props
Prop            | Type   | Required | Default   | Description
--------------- | ------ | -------- | --------- | -----------
action          | func   | Yes      |           | The action to perform
feedback        | bool   | No       | false     | Whether to show feedback on press (ie. should use `<TouchableOpacity>`)
clickThreshold  | num    | No       | 8         | Number of taps required to trigger action
clickTimeout    | num    | No       | 3000      | Number of milliseconds after last tap to reset taps
style           | style  | No       |           | Styles for the container component

## License
MIT.
Made with :hearts: in NYC.
