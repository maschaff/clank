import {Card} from "./Card";
import {playerDefaults} from "./config"
import {Dungeon, Room, RoomType, Tunnel} from "./dungeon";
import {isMarketItem, Loot, LootType} from "./Loot";


export class Player {
    name: string;

    clank: number;
    cubes: number;
    gold: number;
    hp: number;

    dungeon: Dungeon | null;
    room: Room | null;
    loot: Loot[];

    deck: Card[];
    discardPile: Card[];
    hand: Card[];

    constructor(name: string, options?: {
        clank?: number,
        cubes?: number,
        gold?: number,
        hp?: number,
    }) {
        this.name = name;
        this.dungeon = null;
        this.room = null;
        this.loot = [];

        this.clank = options?.clank ?? playerDefaults.clank;
        this.cubes = options?.cubes ?? playerDefaults.cubes;
        this.gold = options?.gold ?? playerDefaults.gold;
        this.hp = options?.hp ?? playerDefaults.hp;
    }

    move(tunnel: Tunnel) {
        this.room = tunnel.roomB;
    }

    hasArtifact() {
        return this.loot.some(({type}) => type === 'artifact')
    }

    hasMonkeyIdol() {
        return this.loot.some(({type}) => type === 'monkey_idol')
    }

    hasCrown() {
        return this.loot.some((item) => isMarketItem(item) && item.name === 'crown')
    }

    hasMasterKey() {
        return this.loot.some((item) => isMarketItem(item) && item.name === 'master_key')
    }

    numBackpacks() {
        return this.loot.reduce((sum, item) => {
            if (isMarketItem(item) && item.name === 'backpack') {
                return sum + 1;
            }

            return sum;
        }, 0)
    }

    getScore() {
        let score = 0;

        // add points from gold
        score += this.gold;

        // add points from loot
        score += this.loot.reduce((sum, {value}) => sum + value ?? 0, 0);

        // add points from deck


        return score;
    }
}