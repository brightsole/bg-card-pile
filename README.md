# bg-card-pile

### What is it?
<details>
  <summary>
    tl;dr: a deck! a graveyard! an exile field! WHATEVER!
  </summary>
  <br />

  It's just a big pile of `card`s, that might be anything.

  It has a bunch of helpful ways to access these cards, and interact with the deck in a variety of human ways.

</details>
<br/>

### How to use it?
<details>
  <summary>
    tl;dr: <TODO><code>`npm i @brightsole/bg-card-pile`</code>
  </summary>
  <br />

  | Method | Description | return |
  | :---------------: | :--------------- | ---------------: |
  | shuffle() | shuffle card order internally | void |
  | cardsRemainingCount() | Get the count of the cards left in the deck | number |
  | draw(number) | Draws x number of cards from the top of the pile | [card] |
  | drawFromBottom(number) | Draws x number of cards from the bottom of the pile | [card] |
  | drawRandomly(number) | Draws x number of cards randomly from the pile | [card] |
  | returnAndShuffle([card]) | Returns cards to the deck and shuffles the order * | void |
  | returnToTop([card]) | Returns cards onto the top of the deck in order * | void |
  | returnToBottom([card]) | Returns cards onto the bottom of the deck in order * | void |

  * All `return` methods try to `reset` the card *if* the card is an object with a *reset* method

</details>
<br/>

### TODO:
nothing! It's a functional deck/graveyard/whatever pile of cards. Methods can be added as needed, but this will handle the next 3 games I have planned.

<br/>
<a href="https://www.buymeacoffee.com/Ao9uzMG" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>