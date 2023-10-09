import {Loot} from "./Loot";

export type RoomType = "default" | "entrance" | "crystal_cave" | "market" | "healing_fountain" | "monkey_shrine";

export interface Dungeon {
    entrance: Room<'entrance'>;
}

export interface Room<T extends RoomType = RoomType> {
    type: T;
    tunnels: Tunnel[];
    loot: Loot[];
    isDepths: boolean;
}

export interface Tunnel {
    roomA: Room;
    roomB: Room;
    boots: number;
    monsters: 0;
    isLocked: boolean;
}

export function buildRoom<T extends RoomType>(options?: {
    type: T;
    tunnels?: Tunnel[];
    loot?: Loot[];
    isDepths?: boolean;
}): Room<T>
export function buildRoom(options?: {
    type: undefined;
    tunnels?: Tunnel[];
    loot?: Loot[];
    isDepths?: boolean;
}): Room<'default'> {
    return {
        type: options?.type ?? 'default',
        tunnels: options?.tunnels ?? [],
        loot: options?.loot ?? [],
        isDepths: options?.isDepths ?? false
    }
}