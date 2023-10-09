import {Card} from "./Card";
import {shuffle} from "lodash-es";

export class Deck {
    cards: Card[];
    discardedCards: Card[];

    constructor(cards: Card[] = []) {
        this.cards = shuffle(cards);
        this.discardedCards = [];
    }

    drawCard() {
        if(this.cards.length === 0) {
            this.cards = shuffle(this.discardedCards);
            this.discardedCards = [];
        }

        return this.cards.pop();
    }

    discardCard(card: Card) {
        this.discardedCards.push(card);
    }

    removeDiscardedCard(index: number) {
        this.discardedCards.splice(index, -1);
    }
}