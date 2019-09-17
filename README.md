# `@cypherlab/react-stepbar`


Visual steps bar for tunnel like experiences  

<a href="https://www.npmjs.com/package/@cypherlab/react-stepbar">
  <img alt="npm" src="https://img.shields.io/npm/v/@cypherlab/react-stepbar">
</a>

## Install
```
npm i @cypherlab/react-stepbar
```


## Usage

See [Live demo](https://raw.githack.com/cypherlab/react-stepbar/master/index.html)  
See [Code example](https://github.com/cypherlab/react-stepbar/blob/master/index.html)  

```js
import StepBar from '@cypherlab/react-stepbar'

// create some trans
const props = {
    steps: ['Cart', 'Shipping', 'Recap', 'Payment']
  , theme: 'dark' 
}

// render
<StepBar {...props} />
```



## Table options

| option        | info                                                            |
|---------------|-----------------------------------------------------------------|
| steps         | steps data. array of anything. required                         |
| onStep        |                                                                 |
| theme         | predefined theme                                                |



## Test 

You can play with the component in the browser via the `index.html`.

```js
(yarn|npm) run dev
```