# React component for Avataaars

The core React component for [Avataaars Generator](https://getavataaars.com/) developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), based on the Sketch library [Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley). 

<p align="center"><img src='avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Easy to integrate with custom editor
 - Comes with [official editor](https://getavataaars.com/)

## Usage

First, you need to install the avataaars component package, here you run

```
yarn add avataaars
```

or

```
npm install avataaars --save
```

if you are using npm. Then, in your React app, import the Avataaar component and put it where you like it to be, for example

```jsx
import * as React from 'react'
import Avatar from 'avataaars'

export default class MyComponent extends React.Component {
  render () {
    return 
      <div>
        Your avatar:
        <Avatar
          style={{width: '100px', height: '100px'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
      </div>
  }
}
```

To showcase individual pieces of the avatar you can use the Piece component, for example:

```jsx
import * as React from 'react'
import {Piece} from 'avataaars';

export default class MyComponent extends React.Component {
  render () {
    return 
      <div>
        <Piece pieceType="mouth" mouthType="Eating"/>
        <Piece pieceType="eyes" eyeType="Dizzy"/>
        <Piece pieceType="eyebrows" eyebrowType="RaisedExcited"/>
        <Piece pieceType="accessories" accessoriesType="Round"/>
        <Piece pieceType="top" topType="LongHairFro" hairColor="Red"/>
        <Piece pieceType="facialHair" facialHairType="BeardMajestic"/>
        <Piece pieceType="clothe" clotheType="Hoodie" clotheColor="Red"/>
        <Piece pieceType="graphics" graphicType="Skull" />
        <Piece pieceType="skin" pieceWidth="264" pieceHeight="280" skinColor="Brown" />
      </div>
  }
}
```

To explore avatar options and generate the React code, please use [Avataaars Generator](https://getavataaars.com/)

## Collect options

To build your own avatar editor, you may want to use lower level `Avatar` component along with `OptionContext`. For more details usage, please reference to source code of [avataaars-generator](https://github.com/fangpenlin/avataaars-geneator), see how it uses `OptionContext` to collection available options.
