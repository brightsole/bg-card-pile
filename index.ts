import { shuffle, selectUniqueIndices } from '@brightsole/bg-utils';

class CardPile<Card> {
  cards: Card[];

  constructor(cards: Card[]) {
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

  drawFromBottom = (count: number): Card[] => {
    const index = this.cards.length - count;

    const drawnCards = this.cards.slice(index);
    this.cards = this.cards.slice(0, index);

    return drawnCards;
  };

  drawRandomly = (count: number): Card[] => {
    const randomIndices = selectUniqueIndices({
      max: this.cards.length,
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

  shuffle = (): void => {
    this.cards = shuffle(this.cards);
  };

  returnAndShuffle = (cards: Card[]): void => {
    this.resetCards(cards);

    this.cards = shuffle(this.cards.concat(cards));
  };

  returnToTop = (cards: Card[]): void => {
    this.resetCards(cards);

    this.cards = cards.concat(this.cards);
  };

  returnToBottom = (cards: Card[]): void => {
    this.resetCards(cards);

    this.cards = this.cards.concat(cards);
  };
}

export default CardPile;
