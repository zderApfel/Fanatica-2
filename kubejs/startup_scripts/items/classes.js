function Item(id, name, tier, rarity, texture, group, type, attackDamageBaseline, attackDamageBonus){
    this.id = id;
    this.name = name;
    this.tier = tier;
    this.rarity = rarity;
    this.texture = texture;
    this.group = group;
    this.type = type;
    this.attackDamageBaseline = attackDamageBaseline;
    this.attackDamageBonus = attackDamageBonus
}

function ItemTier(name, uses, speed, level, enchantmentValue, repairIngredient){
    this.name = name;
    this.uses = uses;
    this.speed = speed;
    this.level = level;
    this.enchantmentValue = enchantmentValue;
    this.repairIngredient = repairIngredient;
}

function ArmorTier(name, durabilityMultiplier, slowProtections, enchantmentValue, equipSound, repairIngredient, toughness, knockbackResistance){

}
