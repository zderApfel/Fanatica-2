//Priority: 0

const tools = [
    new Item(
        //How the game and scripts identify this item
        'silver_sword', 

        //Item name as seen by the player
        'Silver Sword', 
        
        //Check KubeJS documentation for more info
        'common', 
        
        //Texture of the item (found in kubejs/assets/...)
        'kubejs:item/silver_sword',
        
        //The tier of the item
        'silver', 
        
        //Denotes the tab that the item can be found in in Creative mode
        'combat', 
        
        //Check KubeJS documentation for more info
        'sword', 
        //Attack damage
        5.0,
        //Attack speed
        1.6, 
    )
]

const tiers = [
    new ItemTier(
        //Name of the item tier, used for scripts
        'silver',

        //Max durability of the item
        200,

        //How well the item can be enchanted at an enchantent table, cannot be enchanted at 0
        21,

        //What material this item can be repaired with at an anvil or crafting table
        '#forge:ingots/silver' 
    )
]


/*
    |||||||||||||||||||||||||||||||||||
    |YOU ARE ENTERING THE DANGER ZONE!|
    |||||||||||||||||||||||||||||||||||
*/

tiers.forEach(x => 
    onEvent('item.registry.tool_tiers', event => {
        console.log(`ZACH - Loading ${x.name} tool tier...`) 
        event.add(x.name, tier =>{
            tier.uses = x.uses;
            tier.enchantmentValue = x.enchantmentValue;
            tier.repairIngredient = x.repairIngredient;
       })
    })
)


tools.forEach(y => 
    onEvent('item.registry', event => {
        console.log(`ZACH - Loading ${y.name}...`)  
        event.create(y.id, y.type)
            .attackDamageBaseline(y.attackDamageBaseline)
            .displayName(y.name)
            .texture(y.texture)
            .tier(y.tier)
            .group(y.group)
            .type(y.type)
            .speed(y.speed)
            .attackDamageBonus(y.attackDamageBonus)
            .attackDamageBaseline(0.0)
    })
)

