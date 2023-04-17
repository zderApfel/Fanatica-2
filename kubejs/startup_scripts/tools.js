//Priority: 2

//Tools\\

const tools = [
    new Item('silver_pickaxe', 'Silver Pickaxe', 'silver', 'common', 'kubejs:item/silver_pickaxe', 'tools', 'pickaxe', 0, 2),
    new Item('silver_hoe', 'Silver Hoe', 'silver', 'common', 'kubejs:item/silver_hoe', 'tools', 'hoe', 0, 0),
    new Item('silver_axe', 'Silver Axe', 'silver', 'common', 'kubejs:item/silver_axe', 'tools', 'axe', 0, 7),
    new Item('silver_shovel', 'Silver Shovel', 'silver', 'common', 'kubejs:item/silver_shovel', 'tools', 'shovel', 0, 2.5),
    new Item('silver_sword','Silver Sword', 'silver', 'common','kubejs:item/silver_sword','combat','sword', 0, 4)
]

//Tiers\\

const toolTiers = [
    new ItemTier('silver',
    300,
    5,
    4,
    21,
    '#forge:ingots/silver',
    1
)]

/*
    |||||||||||||||||||||||||||||||||||
    |YOU ARE ENTERING THE DANGER ZONE!|
    |||||||||||||||||||||||||||||||||||
*/

tools.forEach(y => 
    onEvent('item.registry', event => {
        console.log(`ZACH - Loading ${y.name}...`)  
        event.create(y.id, y.type)
            .displayName(y.name)
            .texture(y.texture)
            .tier(y.tier)
            .group(y.group)
            .attackDamageBaseline(y.attackDamageBaseline)
            .attackDamageBonus(y.attackDamageBonus)
    })
)

toolTiers.forEach(x => 
    onEvent('item.registry.tool_tiers', event => {
        console.log(`ZACH - Loading ${x.name} tool tier...`) 
        event.add(x.name, tier =>{
            tier.uses = x.uses;
            tier.speed = x.speed;
            tier.level = x.level;
            tier.enchantmentValue = x.enchantmentValue;
            tier.repairIngredient = x.repairIngredient;
       })
    })
)

