declare class CardPile {
    cards: unknown[];
    constructor(cards: unknown[]);
    resetCards: (cards: any) => void;
    draw: (count: number) => unknown[];
    drawFromBottom: (count: number) => unknown[];
    drawRandomly: (count: number) => unknown[];
    cardsRemainingCount: () => number;
    shuffle: () => void;
    returnAndShuffle: (cards: unknown[]) => void;
    returnToTop: (cards: unknown[]) => void;
    returnToBottom: (cards: unknown[]) => void;
}
export default CardPile;
