export const basicAttack = (attacker) => (defender) => {
    if (Math.random() < (attacker.attributes.dexterity / defender.attributes.dexterity)) {
        console.log("basic");
        return {
            damage: (attacker.attributes.strength / 10),
            damageType: "physical"
        };
    }
    console.log("basic");
};