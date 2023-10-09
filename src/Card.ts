import {Effect} from "./effects";

export type CardType = 'basic' | 'companion' | 'gem' | 'device' | 'monster';
export type CardEffectType = 'arrive' | 'acquire' | 'danger' | 'defeat' | 'use' | 'play' | 'skill' | 'points';

export interface CardEffect {
    type: CardEffectType;
    text: string;
    effect: Effect
}

export interface Card {
    name: string;
    description?: string;
    type: CardType;
    dragon?: boolean;
    danger?: number;
    effects?: CardEffect[]
    deepOnly?: boolean;
    crystalCaveOnly?: boolean;
}

export interface PlayableCard extends Card {
    type: 'basic' | 'companion' | 'gem';
    boots?: number | 'effect';
    skill?: number | 'effect';
    swords?: number | 'effect';
    value?: number | 'effect';
    cost?: number;
}

export interface DeviceCard extends Card {
    type: 'device';
    cost: number;
}

export interface MonsterCard extends Card {
    type: 'monster';
    swords: number;
}

export function isPlayableCard(card: Card): card is PlayableCard {
    return ['basic', 'companion', 'gem'].includes(card.type);
}

export function isDeviceCard(card: Card): card is DeviceCard {
    return card.type === 'device';
}

export function isMonsterCard(card: Card): card is MonsterCard {
    return card.type === 'monster';
}
