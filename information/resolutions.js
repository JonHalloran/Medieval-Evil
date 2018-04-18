import {BASIC_ATTACK, MEDITATE, DEFEND, SHIELD_ATTACK, PARRY} from "./moves";

const getResolution = (playerMove, enemyMove) => {
    switch (playerMove) {
        case BASIC_ATTACK:
            switch (enemyMove) {
                case BASIC_ATTACK:
                    return aa;
                case MEDITATE:
                    return ab;
                case DEFEND:
                    return ac;
                case SHIELD_ATTACK:
                    return ad;
                case PARRY:
                    return ae;
            }
            break;
        case MEDITATE:
            switch (enemyMove) {
                case BASIC_ATTACK:
                    return ba;
                case MEDITATE:
                    return bb;
                case DEFEND:
                    return bc;
                case SHIELD_ATTACK:
                    return bd;
                case PARRY:
                    return be;
            }
            break;
        case DEFEND:
            switch (enemyMove) {
                case BASIC_ATTACK:
                    return ca;
                case MEDITATE:
                    return cb;
                case DEFEND:
                    return cc;
                case SHIELD_ATTACK:
                    return cd;
                case PARRY:
                    return ce;
            }
            break;

        case SHIELD_ATTACK:
            switch (enemyMove) {
                case BASIC_ATTACK:
                    return da;
                case MEDITATE:
                    return db;
                case DEFEND:
                    return dc;
                case SHIELD_ATTACK:
                    return dd;
                case PARRY:
                    return de;
            }
            break;
        case PARRY:
            switch (enemyMove) {
                case BASIC_ATTACK:
                    return ea;
                case MEDITATE:
                    return eb;
                case DEFEND:
                    return ec;
                case SHIELD_ATTACK:
                    return ed;
                case PARRY:
                    return ee;
            }
            break;
    }
};

const aa = {
    player: 10,
    enemy: 10,
    string: "You and the enemy both attacked each other doing some damage"
};

const ab = {
    player: 0,
    enemy: 20,
    string: "You attacked your enemy while he was meditating.  Harsh but effective"
};

const ac = {
    player: 10,
    enemy: 0,
    string: "Your enemy defended against your attack.  Somehow you got hurt... not sure how t" +
            "hat worked"
};

const ad = {
    player: 0,
    enemy: 10,
    string: "Your enemy tried hitting you with his shield but your sword was quicker.  Well d" +
            "one"
};

const ae = {
    player: 20,
    enemy: 0,
    string: "The enemy parried your attack and countered"
};

const ba = {
    player: 20,
    enemy: 0,
    string: "You tried mediating and your enemy stabbed you.  How rude!!!"
};

const bb = {
    player: -20,
    enemy: -20,
    string: "You and the enemy both meditated.  You don know this is a fighting game, right?"
};

const bc = {
    player: -20,
    enemy: 0,
    string: "You meditated while your enemy cowered behind his shield."
};

const bd = {
    player: 20,
    enemy: 0,
    string: "You tried meditating and they hit you with their shield.  An effective if ineleg" +
            "ant strategy"
};

const be = {
    player: -20,
    enemy: 0,
    string: "Your enemy tried parrying your meditation.  I think they are confused."
};

const ca = {
    player: 0,
    enemy: 20,
    string: "You successfully defended against your opponents attack.  Well done!"
};

const cb = {
    player: 0,
    enemy: -20,
    string: "You successfully defended against your opponents meditation... unsuccessfully..." +
            " not really sure what your plan was on that one"
};

const cc = {
    player: 0,
    enemy: 0,
    string: "You both cowered behind your shields... I'm going to get a drink this could take" +
            " a while."
};

const cd = {
    player: 5,
    enemy: 15,
    string: "Your oppenent hit your shield with his. You both are a bit shook up"
};

const ce = {
    player: 0,
    enemy: 0,
    string: "Your opponent tried parrying your defense.  Nothing much happened"
};

const da = {
    player: 10,
    enemy: 0,
    string: "You tried hitting your opponent with your shield but he got you with his sword. " +
            " Crafty bugger."
};

const db = {
    player: 0,
    enemy: 20,
    string: "Your opponent tried praying so you hit him in the head with your shield.  Good c" +
            "all."
};

const dc = {
    player: 15,
    enemy: 5,
    string: "Your hit your opponent with your shield while they were defending.  Shook you bo" +
            "th up a bit."
};

const dd = {
    player: 15,
    enemy: 15,
    string: "You both hit each other with your shields.  I don't think either of you were exp" +
            "ecting that outcome"
};

const de = {
    player: 0,
    enemy: 10,
    string: "Your opponent tried some fancy shield manouver so you hit him with yoru shield. " +
            " Effective!"
};

const ea = {
    player: 0,
    enemy: 20,
    string: "You parried your opponents attack and countered"
};

const eb = {
    player: 0,
    enemy: -20,
    string: "Not sure why you tried parrying your opponents mediation but it didn't really do" +
            "n anything."
};

const ec = {
    player: 0,
    enemy: 0,
    string: "You parry, they defend, nothing happens"
};

const ed = {
    player: 10,
    enemy: 0,
    string: "You tried and elaborate parry and your enemy hit you with his shield.  The barba" +
            "rian."
};

const ee = {
    player: 0,
    enemy: 0,
    string: "You and your enemy both parried each other.  A beutiful if pointless endeaveor."
};

export default getResolution;