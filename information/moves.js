export const basicAttack = (strength, attDex) => (defDex) => {
    if (Math.random() < (attDex / defDex)) {
        return {
            damage: (strength * 10),
            damageType: "physical"
        };
    }
};