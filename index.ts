import { shuffle, selectUniqueRandoms } from '@brightsole/bg-utils';

class CardPile {
  cards: unknown[];

  constructor(cards: unknown[]) {
    this.cards = cards;
  }

  resetCards = (cards: any): void => {
    cards.forEach(card => {
      if (card && typeof card.reset === 'function') card.reset();
    });
  };

  draw = (count: number) => {
    const drawnCards = this.cards.slice(0, count);
    this.cards = this.cards.slice(count);

    return drawnCards;
  };

  drawFromBottom = (count: number) => {
    const index = this.cards.length - count;

    const drawnCards = this.cards.slice(index);
    this.cards = this.cards.slice(0, index);

    return drawnCards;
  };

  drawRandomly = (count: number) => {
    const indices = Array.from(Array(this.cards.length)).map((_, i) => i);
    const randomIndices = selectUniqueRandoms({
      arrayToSelectFrom: indices,
      numberToSelect: count,
    });

    const cards = this.cards.filter((_, i) => randomIndices.includes(i));
    const remainder = this.cards.filter((_, i) => !randomIndices.includes(i));

    this.cards = remainder;
    return cards;
  };

  cardsRemainingCount = () => {
    return this.cards.length;
  };

  shuffle = () => {
    this.cards = shuffle(this.cards);
  };

  returnAndShuffle = (cards: unknown[]) => {
    this.resetCards(cards);

    this.cards = shuffle(this.cards.concat(cards));
  };

  returnToTop = (cards: unknown[]) => {
    this.resetCards(cards);

    this.cards = cards.concat(this.cards);
  };

  returnToBottom = (cards: unknown[]) => {
    this.resetCards(cards);

    this.cards = this.cards.concat(cards);
  };
}

export default CardPile;
