import {DeviceCard, MonsterCard, PlayableCard} from "./Card";

export const stumble: PlayableCard = {
    type: 'basic',
    name: 'Stumble',
    description: "If you wanted to get away, you would have kept quiet.",
    effects: [
        {type: 'play', effect: 'plus_1_clank', text: "+1 Clank!"}
    ]
};

export const sidestep: PlayableCard = {
    type: 'basic',
    name: "Sidestep",
    description: "If they wanted you to stay out, they would have blocked the path.",
    boots: 1
}

export const scramble: PlayableCard = {
    type: 'basic',
    name: "Scramble",
    description: "If they wanted to catch you, they would have built a better trap.",
    boots: 1,
    skill: 1
}

export const burgle: PlayableCard = {
    type: 'basic',
    name: 'Burgle',
    description: 'If they wanted to keep it, they would have nailed it down.',
    skill: 1
}

export const mercenary: PlayableCard = {
    type: 'companion',
    name: "Mercenary",
    description: `"I could help you out. But what's in it for me?"`,
    skill: 1,
    swords: 2,
    cost: 2,
}

export const explore: PlayableCard = {
    type: 'companion',
    name: "Explore",
    description: "You never know what wonders may be waiting around the corner.",
    skill: 1,
    swords: 2,
    cost: 3,
}

export const secretTome: PlayableCard = {
    type: 'basic',
    name: "Secret Tome",
    description: "You'll have time to read it once you've escaped the dragon.",
    cost: 7,
    value: 7,
}

export const goblin: MonsterCard = {
    type: 'monster',
    name: "Goblin",
    description: "They may be short, but they're not in short supply.",
    swords: 2,
    effects: [
        {type: "defeat", effect: "plus_1_gold", text: ""}
    ]
};

export const treasureHunter: PlayableCard = {
    name: "Treasure Hunter",
    description: `"Let's have another look around."`,
    type: 'companion',
    skill: 2,
    swords: 2,
    cost: 3,
    value: 1,
    effects: [
        {
            type: "play",
            effect: "replace_dungeon_row_card",
            text: "Replace a card in the dungeon row. (If the new card has a dragon attack symbol, ignore it.)"
        }
    ]
}

export const emerald: PlayableCard = {
    name: "Emerald",
    type: "gem",
    dragon: true,
    cost: 5,
    effects: [
        {type: 'acquire', effect: 'plus_2_clank', text: "+2 Clank!"},
        {type: 'play', effect: 'draw_1_card', text: "Draw a card."}
    ]
}

export const teleporter: DeviceCard = {
    name: "Teleporter",
    description: "Do not use less than 15 minutes after eating.",
    type: "device",
    cost: 4,
    effects: [
        {type: 'use', effect: 'teleport', text: "Teleport to an adjacent room."}
    ]
};

export const archaeologist: PlayableCard = {
    name: "Archaeologist",
    description: `"This belongs in a museum! But I'll take it anyway."`,
    type: 'companion',
    skill: 'effect',
    cost: 2,
    value: 1,
    effects: [
        {type: "play", effect: 'draw_1_card', text: "Draw a card."},
        {type: 'skill', effect: 'if_has_monkey_idol_plus_2_skill', text: "If you have a monkey idol, +2 Skill"}
    ]
}

export const deadRun: PlayableCard = {
    name: "Dead Run",
    description: `"You know why the call it that, right?"`,
    type: 'basic',
    boots: 2,
    cost: 3,
    effects: [
        {type: "play", effect: "plus_2_clank", text: "+2 Clank!"},
        {type: "play", effect: "ignore_crystal_caves", text: "You don't have to stop in Crystal Caves this turn."}
    ]
};

export const theVault: DeviceCard = {
    name: "The Vault",
    description: `"So much gold you could swim in it!"`,
    type: 'device',
    deepOnly: true,
    cost: 3,
    effects: [
        {type: 'use', effect: "plus_5_gold", text: "+5 gold"},
        {type: 'use', effect: "plus_3_clank", text: "+3 Clank!"}
    ]
}

export const elvenDagger: PlayableCard = {
    name: "Elven Dagger",
    description: "Weapons masters know an Elvish blade not just by its runes, but by its perfect balance.",
    type: 'basic',
    cost: 4,
    value: 2,
    skill: 1,
    swords: 1,
    effects: [
        {type: 'play', effect: 'draw_1_card', text: "Draw a card."}
    ]
}

export const moveSilently: PlayableCard = {
    name: "Move Silently",
    description: "Silence is golden",
    type: 'basic',
    cost: 3,
    boots: 2,
    effects: [
        {type: "play", effect: "minus_2_clank", text: "-2 Clank!"}
    ]
}

export const kobold: MonsterCard = {
    name: "Kobold",
    description: "These physically weak creatures serve as eyes for the dragon.",
    type: 'monster',
    dragon: true,
    danger: 1,
    swords: 1,
    effects: [
        {type: 'defeat', effect: 'plus_1_skill', text: "+1 Skill"}
    ]
}

export const silverSpear: PlayableCard = {
    name: "Silver Spear",
    description: "As useful in your hands as it is beautiful on you wall.",
    type: 'basic',
    swords: 3,
    cost: 3,
    value: 2,
    effects: [
        {type: 'acquire', effect: "plus_1_sword", text: ""}
    ]
}

export const ladder: DeviceCard = {
    name: "Ladder",
    description: "You say ominous hole. I say promising shortcut.",
    type: "device",
    cost: 3,
    effects: [
        {type: 'use', effect: 'plus_2_boots', text: ""}
    ]
}

export const ruby: PlayableCard = {
    name: "Ruby",
    type: "gem",
    cost: 6,
    value: 6,
    dragon: true,
    effects: [
        {type: 'acquire', effect: 'plus_2_clank', text: "+2 Clank!"},
        {type: 'play', effect: 'draw_1_card', text: "Draw a card."}
    ]
}

export const watcher: MonsterCard = {
    name: "Watcher",
    description: "I have a funny feelijng that I'm being Clanked!",
    type: 'monster',
    swords: 3,
    effects: [
        {type: 'acquire', effect: 'plus_1_clank_all', text: "All players get +1 Clank!"},
        {type: 'defeat', effect: 'plus_3_gold', text: ""},
        {type: 'defeat', effect: 'plus_1_clank_others', text: "All other players get +1 Clank!"},
    ]
}

export const overlord: MonsterCard = {
    name: "Overlord",
    description: "Their insidious plots are unknown even to Nictotraxian.",
    type: 'monster',
    swords: 2,
    effects: [
        {type: 'acquire', effect: 'plus_1_clank_all', text: "All players get +1 Clank!"},
        {type: 'defeat', effect: 'draw_2_cards', text: "Draw two cards."},
    ]
}

export const pickaxe: PlayableCard = {
    name: "Pickaxe",
    description: "No need to limit yourself to the riches just lying  around.",
    type: 'basic',
    swords: 2,
    cost: 4,
    value: 2,
    effects: [
        {type: 'play', effect: "plus_2_gold", text: "+2 Gold"}
    ]
}

export const brilliance: PlayableCard = {
    name: "Brilliance",
    description: `"Not to worry. I have an idea."`,
    type: 'basic',
    cost: 6,
    effects: [
        {type: 'play', effect: "draw_3_cards", text: "Draw 3 cards."}
    ]
}

export const amuletOfVigor: PlayableCard = {
    name: "Amulet of Vigor",
    description: "If the magic lasts for more than four hours, you should consult your healer.",
    type: "basic",
    cost: 7,
    value: 3,
    skill: 4,
    effects: [
        {type: 'acquire', effect: 'plus_1_hp', text: ""},
    ]
}

export const luckyCoin: PlayableCard = {
    type: 'basic',
    name: "Lucky Coin",
    description: `"Heads, I win. Tails, you lose."`,
    cost: 1,
    value: 1,
    skill: 1,
    effects: [
        {type: 'play', effect: 'plus_1_clank', text: "+1 Clank!"},
        {type: 'play', effect: 'draw_1_card', text: "Draw a card."},
    ]
}

export const flyingCarpet: PlayableCard = {
    type: 'basic',
    name: "Flying Carpet",
    value: 2,
    cost: 6,
    boots: 2,
    effects: [
        {type: "play", effect: 'ignore_crystal_caves', text: ""},
        {
            type: "play",
            effect: 'ignore_monsters_in_tunnels',
            text: "This turn, ignore monsters in tunnels, and you don't have to stop in Crystal Caves."
        },
    ]
}

export const rebelScout: PlayableCard = {
    type: 'companion',
    name: "Rebel Scout",
    description: `"These tracks are fresh. We should go a different way."`,
    cost: 3,
    value: 1,
    boots: 2,
    effects: [
        {
            type: 'play',
            effect: "if_companion_in_play_draw_1_card",
            text: "If you have another companion in your play area, draw a card."
        }
    ]
}

export const bracersOfAgility: PlayableCard = {
    type: 'basic',
    name: "Bracers of Agility",
    description: "It's all on the wrist",
    cost: 5,
    value: 2,
    effects: [
        {type: 'play', effect: "draw_2_cards", text: "Draw two cards."}
    ]
}

export const shrine: DeviceCard = {
    type: "device",
    name: "Shrine",
    description: "A tribute to a forgotten god, the shrine can calm the dragon's rage. A little.",
    cost: 2,
    effects: [
        {type: 'arrive', effect: 'put_3_dragon_cubes_back_in_bag', text: "Put 3 dragon cubes back in the bag."},
        {type: 'use', effect: "plus_1_gold_or_plus_1_hp", text: "+1 gold OR +1 hp"}
    ]
}

export const sapphire: PlayableCard = {
    type: 'gem',
    name: "Sapphire",
    cost: 4,
    dragon: true,
    value: 4,
    effects: [
        {type: 'acquire', effect: 'plus_2_clank', text: "+2 Clank!"},
        {type: 'play', effect: 'draw_1_card', text: "Draw a card."}
    ]
}

export const bootsOfSwiftness: PlayableCard = {
    type: 'basic',
    name: "Boots of Swiftness",
    description: "They make it easier to think on your feet.",
    cost: 5,
    value: 3,
    boots: 3,
    effects: [
        {type: 'acquire', effect: 'plus_1_boot', text: "+1 Boot"},
    ]
}

export const orcGrunt: MonsterCard = {
    type: 'monster',
    name: "Orc Grunt",
    description: "With their constant raids, the Orcs aim to quash the rebellion.",
    swords: 2,
    dragon: true,
    effects: [
        {type: "defeat", effect: "plus_3_gold", text: "+3 Gold"}
    ]
}

export const search: PlayableCard = {
    type: 'basic',
    name: "Search",
    description: "Leave no stone unturned",
    cost: 4,
    skill: 2,
    boots: 1,
    effects: [
        {
            type: 'play',
            effect: 'plus_1_gold_per_times_earned_gold',
            text: "Each time you gain gold this turn, increase the amount you gain by 1."
        }
    ]
}

export const invokerOfTheAncients: PlayableCard = {
    type: 'companion',
    name: "Invoker of the Ancients",
    description: "It is said that the magic of the Ancients knew no boundaries.",
    cost: 4,
    value: 1,
    effects: [
        {type: 'play', effect: "plus_1_clank", text: "+1 Clank!"},
        {type: 'play', effect: "teleport", text: "Teleport to an adjacent room."},
    ]
}

export const tunnelGuide: PlayableCard = {
    type: 'companion',
    name: "Tunnel Guide",
    description: `"Oh, I know the way. It's this map that's the problem"`,
    cost: 1,
    value: 1,
    swords: 1,
    boots: 1,
}

export const masterBurglar: PlayableCard = {
    type: 'companion',
    name: "Master Burglar",
    description: `"Now let's go over the plan one more time..."`,
    cost: 3,
    value: 2,
    skill: 2,
    effects: [
        {type: "play", effect: "trash_a_burgle", text: "Trash a Burgle in your play area or discard pile."}
    ]
}

export const wandOfWind: PlayableCard = {
    type: 'basic',
    name: "Wand of Wind",
    cost: 6,
    value: 3,
    effects: [
        {
            type: 'play',
            effect: 'teleport_or_take_adjacent_secret',
            text: "Teleport to an adjacent room. -OR- Take a secret from an adjacent room."
        }
    ]
}

export const underworldDealing: PlayableCard = {
    type: "basic",
    name: "Underworld Dealing",
    cost: 1,
    effects: [
        {
            type: "play",
            effect: "plus_1_gold_or_buy_2_tomes",
            text: "+1 Gold -OR- Spend 7 Gold to take two Secret Tomes."
        }
    ]
}

export const belcher: MonsterCard = {
    type: "monster",
    name: "Belcher",
    description: "This foul creature is named for its unusual battlecry.",
    swords: 2,
    dragon: true,
    effects: [
        {type: "defeat", effect: "plus_4_gold", text: "+4 Gold"},
        {type: "defeat", effect: "plus_2_clank", text: "+2 Clank!"},
    ]
}

export const wizard: PlayableCard = {
    type: "companion",
    name: "Wizard",
    description: `"I'd just hate to need a spell and not have the right book with me."`,
    cost: 6,
    value: 'effect',
    skill: 3,
    effects: [
        {type: 'points', effect: "worth_2_points_per_tome", text: "Worth 2 points for each Secret Tome you have."}
    ]
}

export const dragonsEye: PlayableCard = {
    type: 'gem',
    name: "Dragon's Eye",
    deepOnly: true,
    dragon: true,
    value: 'effect',
    effects: [
        {type: 'play', effect: 'draw_1_card', text: "Draw a card."},
        {
            type: 'points',
            effect: 'if_has_mastery_token_worth_10_points',
            text: "Worth 10 points if you have a mastery token."
        }
    ]
}

export const theDuke: PlayableCard = {
    type: 'companion',
    name: "The Duke",
    description: `"I need an army to take back my duchy. And armies require gold."`,
    skill: 2,
    swords: 2,
    cost: 5,
    value: 'effect',
    effects: [
        {type: "points", effect: "worth_1_point_per_5_gold", text: "Worth 1 point for every 5 gold you have."}
    ]
}

export const dwarvenPeddler: PlayableCard = {
    type: 'companion',
    name: "Dwarven Peddler",
    boots: 1,
    cost: 4,
    value: "effect",
    effects: [
        {type: 'play', effect: 'plus_2_gold', text: "+2 Gold",},
        {
            type: 'points',
            effect: 'worth_4_points_if_has_two_of_following_chalice_dragon_egg_monkey_idol',
            text: "Worth 4 points if you have two of the following: chalice, dragon egg, and monkey idol.",
        },
    ]
}

export const treasureMap: PlayableCard = {
    type: 'basic',
    name: "Treasure Map",
    description: "This valuable find will soon lead to many others.",
    cost: 6,
    effects: [
        {type: 'play', effect: 'plus_5_gold', text: "+5 Gold",}
    ]
}

export const tattle: PlayableCard = {
    type: "basic",
    name: "Tattle",
    description: "There's no honor among thieves... but lots of dirty laundry.",
    cost: 3,
    skill: 2,
    effects: [
        {type: 'play', effect: "plus_1_clank_others", text: "Each other player gets +1 Clank!"}
    ]
}

export const clericOfTheSun: PlayableCard = {
    type: 'companion',
    name: "Cleric of the Sun",
    description: `"Take heart, traveler"`,
    cost: 3,
    value: 1,
    skill: 2,
    swords: 1,
    effects: [
        {type: 'acquire', effect: "plus_1_hp", text: "+1 HP"}
    ]
}

export const wandOfRecall: PlayableCard = {
    type: "basic",
    name: "Wand of Recall",
    description: "Try not to think about the solid rock you;'re passing through.",
    value: 1,
    cost: 5,
    skill: 2,
    effects: [
        {
            type: 'play',
            effect: 'if_has_artifact_teleport_adjacent',
            text: "If you have an artifact, teleport to an adjacent room."
        }
    ]
}

export const caveTroll: MonsterCard = {
    type: "monster",
    name: "Cave Troll",
    swords: 4,
    deepOnly: true,
    dragon: true,
    effects: [
        {type: "defeat", effect: "plus_3_gold", text: "+3 Gold",},
        {type: "defeat", effect: "draw_2_cards", text: "Draw two cards.",},
    ]
}

export const misterWhiskers: PlayableCard = {
    type: 'companion',
    name: "Mister Whiskers",
    description: "Might be the dragon's pet. Or it might be the other way around.",
    cost: 1,
    value: 1,
    dragon: true,
    effects: [
        {type: 'play', effect: "dragon_attacks_or_minus_2_clank", text: "The dragon attacks -OR- -2 Clank!"}
    ]
}

export const sleightOfHand: PlayableCard = {
    type: "basic",
    name: "Sleight of Hand",
    description: "Why just play the hand you're dealt?",
    cost: 2,
    effects: [
        {type: 'play', effect: 'discard_to_draw_2_cards', text: "Discard a card to draw two cards."}
    ]
}

export const ogre: MonsterCard = {
    type: 'monster',
    name: 'Ogre',
    description: "It crushes what it doesn't understand. Which is a lot.",
    swords: 3,
    dragon: true,
    effects: [
        {type: "defeat", effect: "plus_5_gold", text: "+5 Gold"}
    ]
}

export const rebelSoldier: PlayableCard = {
    type: 'companion',
    name: 'Rebel Soldier',
    description: `"Orcs have the most crushable skulls."`,
    value: 1,
    cost: 2,
    swords: 2,
    effects: [
        {
            type: "play",
            effect: 'if_companion_in_play_draw_1_card',
            text: "If you have another companion in your play area, draw a card."
        }
    ]
}

export const sneak: PlayableCard = {
    type: 'basic',
    name: 'Sneak',
    description: "Darkness is one of the thief's greatest weapons.",
    cost: 2,
    skill: 1,
    boots: 1,
    effects: [
        {type: "play", effect: "minus_2_clank", text: "-2 Clank!"}
    ]
}

export const crystalGolem: MonsterCard = {
    type: 'monster',
    name: "Crystal Golem",
    description: "It knows you can't run.",
    swords: 3,
    crystalCaveOnly: true,
    effects: [
        {type: "defeat", effect: "plus_3_skill", text: "+3 Skill"}
    ]
}

export const dragonShrine: DeviceCard = {
    type: 'device',
    name: "Dragon Shrine",
    danger: 1,
    cost: 4,
    effects: [
        {
            type: "use",
            effect: '2_gold_or_trash_a_card',
            text: "+2 Gold -OR- Trash a card in your play area or discard pile."
        }
    ]
}

export const theQueenOfHearts: PlayableCard = {
    type: 'companion',
    name: "The Queen of Hearts",
    description: "Playing with her ain't really smart.",
    cost: 6,
    value: 3,
    skill: 3,
    swords: 1,
    effects: [
        {type: "play", effect: "if_has_crown_plus_1_hp", text: "If you have a crown, +1 HP",}
    ]
}

export const diamond: PlayableCard = {
    type: 'gem',
    name: "Diamond",
    cost: 8,
    value: 8,
    dragon: true,
    effects: [
        {type: 'acquire', effect: 'plus_2_clank', text: "+2 Clank!"},
        {type: "play", effect: "draw_1_card", text: "Draw a card."}
    ]
}

export const koboldMerchant: PlayableCard = {
    type: "companion",
    name: "Kobold Merchant",
    description: "Some kobolds become minions for evil beasts. Others get business degrees.",
    cost: 3,
    value: "effect",
    effects: [
        {type: "play", effect: "plus_2_gold", text: "+2 Gold"},
        {type: "skill", effect: "if_has_artifact_plus_2_skill", text: "If you have an artifact, +2 Skill."}
    ]
}

export const singingSword: PlayableCard = {
    type: "basic",
    name: "Singing Sword",
    description: "Careful. It's sharp",
    cost: 5,
    value: 2,
    dragon: true,
    skill: 3,
    swords: 2,
    effects: [
        {type: 'play', effect: 'plus_1_clank', text: "+1 Clank!"}
    ]
}

export const gemCollector: PlayableCard = {
    type: 'companion',
    name: "Gem Collector",
    description: `"Like taking candy from a fire-breathing baby."`,
    cost: 4,
    value: 2,
    skill: 2,
    effects: [
        {type: 'play', effect: "minus_2_clank", text: "-2 Clank!"},
        {type: "play", effect: "gems_cost_2_skill_less", text: "Gems cost 2 Skill less this turn."}
    ]
}

export const rebelCaptain: PlayableCard = {
    type: 'companion',
    name: 'Rebel Captain',
    description: `"To arms, Dwarves! It's time we take back our kingdom from those scaly brutes!"`,
    cost: 3,
    value: 1,
    skill: 2,
    effects: [
        {
            type: "play",
            effect: 'if_companion_in_play_draw_1_card',
            text: "If you have another companion in your play area, draw a card."
        }
    ]
}

export const scepterOfTheApeLord: PlayableCard = {
    type: 'basic',
    name: "Scepter of the Ape Lord",
    description: "The entire society of the Ape Lords was built around the number 3.",
    cost: 3,
    value: 3,
    skill: 3,
    effects: [
        {type: 'play', effect: "plus_3_clank", text: "+3 Clank!"}
    ]
}

export const swagger: PlayableCard = {
    type: 'basic',
    name: "Swagger",
    description: "There's a fine line between bravery and stupidity.",
    cost: 2,
    boots: 1,
    skill: "effect",
    effects: [
        {
            type: 'play',
            effect: 'plus_1_skill_per_clank_this_turn',
            text: "For each Clank! you make this turn, +1 Skill."
        }
    ]
}

export const animatedDoor: MonsterCard = {
    type: "monster",
    name: "Animated Door",
    description: "Sometimes the door knocks on you.",
    swords: 1,
    dragon: true,
    effects: [
        {type: "defeat", effect: 'plus_1_boot', text: "+1 Boots"}
    ]
}

export const theMountainKing: PlayableCard = {
    type: 'companion',
    name: "The Mountain King",
    description: "Once he reclaims his keep from Nictotraxian, he'll seek out her brother Curiox.",
    cost: 6,
    value: 3,
    skill: 2,
    boots: "effect",
    swords: "effect",
    effects: [
        {
            type: 'play',
            effect: 'if_has_crown_plus_1_sword_and_plus_1_boot',
            text: "If you have a crown, +1 Sword and +1 Boot"
        }
    ]
}

export const monkeyBot3000: PlayableCard = {
    type: 'companion',
    name: "MonkeyBot 3000",
    description: "Constructed over three millennia ago, its mechanical heart still ticks. Loudly.",
    cost: 5,
    value: 1,
    dragon: true,
    effects: [
        { type: "play", effect: "plus_3_clank", text: "+3 Clank!"},
        { type: "play", effect: "draw_3_cards", text: "Draw three cards."},
    ]
}