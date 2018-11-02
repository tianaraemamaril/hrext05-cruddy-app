### Cruddy App Todo

#### Basic Improvements (requirements)

- [X] create indivdiual items
- [X] delete individual items
- [X] edit individual items

##### Notes
- [X] Keep DOM and localStorage matching  
- [ ] Remember event Delegation when adding new items to .show-text // ?? 
- [X] make sure we do not duplicate data
- [X] add different values to the item

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
- [X] create bears
- [X] feed / steal food from bears
- [X] delete bears

<!--
  // still need to center bears
  // delete individual bears x
    // update: button clearing all bears - find out how to clear individual items in local storage x

    //localStorage.removeItem(key); 

  // get correct value so bear resizes after the object has been deleted x
-->  

<!-- 
PLAN

Cruddy App

BEAR GAME
Create - bears to be fed food items 

Pooh - Honey // button in shape of honey // no time to make it fancy with the food photos  :(  or to add the sleeping Zzz's
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
