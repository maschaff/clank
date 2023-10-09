import {minorSecrets} from "../config";
import {buildRoom, Dungeon} from "../Dungeon";
import {minorSecretGenerator} from "../Loot";

const shuffledMinorSecrets = minorSecretGenerator(minorSecrets);

const secret = shuffledMinorSecrets.next().value;

const r1 = buildRoom();
const r2 = buildRoom();
const r3 = buildRoom({ loot: [secret]})

const entrance = buildRoom({ type: 'entrance' })

export const dungeon: Dungeon = {
    entrance
};