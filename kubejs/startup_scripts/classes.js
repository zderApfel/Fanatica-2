//Priority: 9999

function Item(id, name, rarity, texture, tier, group, type, damage, speed, attackDamageBonus){
    this.id = id;
    this.name = name;
    this.rarity = rarity;
    this.texture = texture;
    this.tier = tier;
    this.group = group;
    this.type = type;
    this.damage = damage;
    this.speed = speed;
    this.attackDamageBonus = attackDamageBonus;
}

function ItemTier(name, uses, speed, level, enchantmentValue, repairIngredient){
    this.name = name;
    this.uses = uses;
    this.speed = speed;
    this.level = level;
    this.enchantmentValue = enchantmentValue;
    this.repairIngredient = repairIngredient;
}