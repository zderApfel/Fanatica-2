function Item(id, name, rarity, texture, tier, group, type, attackDamageBonus, speed){
    //How the game and scripts identify this item
    this.id = id;

    //Name of item as seen by the player
    this.name = name;

    //Check KubeJS documentation for more info
    this.rarity = rarity;

    //Texture of the item
    this.texture = texture; 

    //The tier of it, specifically for tools
    this.tier = tier; 

    //The "group" of the item for things like Creative inventory tabs
    this.group = group; 

    //Check KubeJS documentation for more info
    this.type = type;

    //The item's melee attack damage
    this.attackDamageBonus = attackDamageBonus;

    //The item's attackspeed
    this.speed = speed;
}

function ItemTier(name, uses, enchantmentValue, repairIngredient){
//Name of the item tier
this.name = name;

//Max durability of the item 
this.uses = uses; 

//How well the item can be enchanted at an enchantment table, cannot be enchanted at 0
this.enchantmentValue = enchantmentValue;

//What material this item can be repaired with at an anvil or crafting table
this.repairIngredient = repairIngredient;
}