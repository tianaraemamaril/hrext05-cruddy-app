### Cruddy App Todo

#### Basic Improvements (requirements)

- [ ] create indivdiual items
- [ ] delete individual items
- [ ] edit individual items

##### Notes
- [ ] Keep DOM and localStorage matching  // store objects 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
(to be filled out by you)
- [ ] create bears
- [ ] feed / steal food from bears
- [ ] delete bears

<!-- 
PLAN

Cruddy App

BEAR GAME
Create - bears to be fed food items 

Pooh - Honey // button in shape of honey
Paddinton - Marmalade
Volibear - Teemo

button: feed bear
// timesEaten++
// enlarge bearSize by 10%
button: steal food from bear 
// timesEaten--
// decrease bearSize by 10%

Obj : {
  name: 'Winnie the Pooh',
  food: 'honey',
  timesEaten: 0,
}

button.click -> increment or decrement timesEaten based on food


// max time to feed bear is 5, then they go into a food coma and you can no longer feed them
// sleeping picture of the bear

// reset / delete button deletes obj in local storagw and resets bears to 0 timesEaten

-->
