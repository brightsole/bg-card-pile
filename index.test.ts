import test from 'ava';
import CardPile from './index';

test('it allows you to give it cards to keep track of', t => {
  const cards = [1, 2];
  const deck = new CardPile(cards);
  t.deepEqual(deck.cards, cards);
});

test('returns the number of cards remaining', t => {
  const cards = ['niner', 'erasthenes', 1, 2];
  const deck = new CardPile(cards);

  t.deepEqual(4, deck.cardsRemainingCount());
});

test('allows you to draw cards', t => {
  const cards = [1, 2];
  const graveyard = new CardPile(cards);

  const grabbedCards = graveyard.draw(2);
  t.deepEqual(grabbedCards, cards);
  t.deepEqual(graveyard.cards, []);
});

test('allows you to draw cards from the bottom', t => {
  const cards = [1, 2, 3, 4, 5];
  const graveyard = new CardPile(cards);

  const grabbedCards = graveyard.drawFromBottom(2);
  t.deepEqual(grabbedCards, [4, 5]);
  t.deepEqual(graveyard.cards, [1, 2, 3]);
});

test('allows you to draw a random set of cards', t => {
  const cards = [1, 2, 3, 4, 5, 6, 7];
  const graveyard = new CardPile(cards);

  const grabbedCards = graveyard.drawRandomly(2);
  t.deepEqual(5, graveyard.cards.length);
  t.deepEqual(2, grabbedCards.length);
});

test('appends cards onto the bottom without shuffling', t => {
  const cards = [1, 2];
  const deck = new CardPile(cards);

  deck.returnToBottom(['niner', { a: 'a' }]);
  t.deepEqual(deck.cards, [1, 2, 'niner', { a: 'a' }]);
});

test('appends cards onto the top without shuffling', t => {
  const cards = [1, 2];
  const deck = new CardPile(cards);

  deck.returnToTop(['niner', { a: 'a' }]);
  t.deepEqual(deck.cards, ['niner', { a: 'a' }, 1, 2]);
});

test('returns cards and shuffles', t => {
  const cards = [1, 2];
  const deck = new CardPile(cards);

  deck.returnAndShuffle(['erasthenes', 'niner']);

  ['niner', 'erasthenes', 1, 2].forEach(card => {
    t.truthy(deck.cards.find(c => c === card));
  });
});

test('shuffles', t => {
  const cards = ['niner', 'erasthenes', 1, 2];
  const deck = new CardPile(cards);

  deck.shuffle();

  cards.forEach(card => {
    t.truthy(deck.cards.find(c => c === card));
  });
});
