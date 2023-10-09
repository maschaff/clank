import {shuffle} from "lodash-es"

export type LootType = "minor_secret" | "major_secret" | "artifact" | "mastery_token" | "market_item" | "monkey_idol";

export type MinorSecretName = "dragon_egg" | "magic_spring" | "potion_of_healing" | "potion_of_swiftness" | "potion_of_strength" | "skill_boost" | "treasure";

export type MajorSecretName = "chalice" | "flash_of_brilliance" | "greater_skill_boost" | "greater_treasure" | "potion_of_greater_healing";

export type MarketItemName = "backpack" | "crown" | "master_key";

export interface Loot {
    type: LootType;
    value?: number;
}

export interface MinorSecret extends Loot {
    type: "minor_secret",
    name: MinorSecretName
}

export interface MajorSecret extends Loot {
    type: "major_secret",
    name: MajorSecretName
}

export interface MarketItem extends Loot {
    type: "market_item",
    name: MarketItemName,
}

export interface Artifact extends Loot {
    type: "artifact",
}

export interface MasteryToken extends Loot {
    type: 'mastery_token';
}

export interface MonkeyIdol extends Loot {
    type: 'monkey_idol';
}

export function* minorSecretGenerator(secrets: MinorSecretName[]): Generator<MinorSecretName> {
    for(const secret: MinorSecretName in shuffle(secrets)) {
        yield secret;
    }
}

export function isMarketItem(item: Loot): item is MarketItem {
    return item.type === 'market_item';
}