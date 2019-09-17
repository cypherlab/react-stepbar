# `@cypherlab/react-stepbar`

<p align="center">
  <img width="444" alt="screenshot" src="https://user-images.githubusercontent.com/503577/65076308-047c7600-d999-11e9-8225-89a8193bfc5b.png">
</p>

<p align="center">
  Stepbar component for tunnel like ux's.
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@cypherlab/react-stepbar">
    <img alt="npm" src="https://img.shields.io/npm/v/@cypherlab/react-stepbar">
  </a>
  <img alt="NPM badge" src="https://img.shields.io/npm/l/@cypherlab/react-stepbar">
</p>


## Install
```
npm i @cypherlab/react-stepbar
```


## Usage

See [Live demo](https://raw.githack.com/cypherlab/react-stepbar/master/index.html)  
See [Code example](https://github.com/cypherlab/react-stepbar/blob/master/index.html)  

```js
import StepBar from '@cypherlab/react-stepbar'

const props = {
    steps: ['Cart', 'Shipping', 'Recap', 'Payment']
  , theme: 'dark' 
  , onRef: ref => (window['myStepBar'] = ref)
}

// render
<StepBar {...props} />

// ref usage
window['myStepBar'].setStep(3)
```



## Table options

| option        | info                                                            |
|---------------|-----------------------------------------------------------------|
| steps         | steps data. array of anything. required                         |
| onRef         |                                                                 |
| onStep        |                                                                 |
| theme         | predefined theme                                                |

## Methods

| option        | info                                                            |
|---------------|-----------------------------------------------------------------|
| setStep       |   |



## Test 

You can play with the component in the browser via the `index.html`.

```js
(yarn|npm) run dev
```