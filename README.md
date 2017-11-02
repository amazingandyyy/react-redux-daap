# React Restart

## Usage
```
git clone https://github.com/amazingandyyy/react-redux-daap.git
npm install
npm run dev
<!-- open browser http://localhost:5000 -->
```

## Build & Run
```
npm run build && npm run start
```

## React
Clone from my [this repo](https://github.com/amazingandyyy/react-restart)

## Add Ethjs
Add Ethjs to the project, you can find Eth in state and use it as web3.eth.
### Sample Usage
check the file of about component, as following
```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

const About = (props) => {
	console.log(props.Eth);
	return (
		<div>
			Current provider: {props.Eth.currentProvider.host}
		</div>
	)
};

export default connect(({ Eth }) => ({ Eth }), null)(About);

```

## Versions
Library |   version
---     |   ---
react   |   v16.0.0
redux   |   v3.7.1
ethjs   |   v0.3.0
react-router | v4.2.2
babel-preset-es2017 | 6.24.1
webpack | v3.6.0

## License
[MIT](https://github.com/amazingandyyy/react-redux-daap/blob/master/LICENSE)