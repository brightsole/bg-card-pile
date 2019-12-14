declare class CardPile<Card> {
    cards: Card[];
    constructor(cards: Card[]);
    resetCards: (cards: any) => void;
    draw: (count: number) => Card[];
    drawFromBottom: (count: number) => Card[];
    drawRandomly: (count: number) => Card[];
    cardsRemainingCount: () => number;
    shuffle: () => void;
    returnAndShuffle: (cards: Card[]) => void;
    returnToTop: (cards: Card[]) => void;
    returnToBottom: (cards: Card[]) => void;
}
export default CardPile;
