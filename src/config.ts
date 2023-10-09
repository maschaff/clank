import {Card} from "./Card";
import {sidestep, stumble, scramble, burgle} from "./cards";
import {MajorSecretName, MinorSecretName} from "./Loot";

/*
    Mercenary x15
    Explore x15
    Secret Tome x12
    Goblin x1
 */

export const playerDefaults = {
    hp: 10,
    cubes: 30,
    clank: 0,
    gold: 0,
    loot: [],
    cards: [
        ...Array(6).fill(burgle),
        ...Array(2).fill(stumble),
        sidestep,
        scramble,
    ] as Card[]
}

export const minorSecrets: MinorSecretName[] = [
    'potion_of_healing',
    'potion_of_healing',
    'potion_of_healing',
    'skill_boost',
    'skill_boost',
    'skill_boost',
    'treasure',
    'treasure',
    'treasure',
    'dragon_egg',
    'dragon_egg',
    'dragon_egg',
    'potion_of_strength',
    'potion_of_strength',
    'potion_of_swiftness',
    'potion_of_swiftness',
    'magic_spring',
    'magic_spring',
];

export const majorSecrets: MajorSecretName[] = [
    'chalice',
    'chalice',
    'chalice',
    'potion_of_greater_healing',
    'potion_of_greater_healing',
    'greater_skill_boost',
    'greater_skill_boost',
    'greater_treasure',
    'greater_treasure',
    'flash_of_brilliance',
    'flash_of_brilliance',
];