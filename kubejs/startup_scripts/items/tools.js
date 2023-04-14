//Priority: 0

/*
    Helpful Info (These are all examples based on vanilla game items)

    Default Attack Speeds:

        * Swords = 1.6
        * Pickaxes = 1.2
        * Shovels =
        * Axes =
        * Hoes =

    Default Enchantabilities:

    Default Mining Speeds:

        * 

    Default Mining Levels:
        
        * Wood = 1
        * Iron = 4
        * Diamond = 5
        * Netherite = 6
        * Legendary (Custom) = 10



*/

//Tools\\

const tools = [
    new Item('silver_pickaxe', 'Silver Pickaxe', 'common', 'kubejs:item/silver_pickaxe', 'silver', 'tools', 'pickaxe', 2.0, 1.3),
    new Item('silver_hoe', 'Silver Hoe', 'common', 'kubejs:item/silver_hoe', 'silver', 'tools', 'hoe', 0.0, 1.1),
    new Item('silver_axe', 'Silver Axe', 'common', 'kubejs:item/silver_axe', 'silver', 'tools', 'axe', 7.0, 1.0),
    new Item('silver_shovel', 'Silver Shovel', 'common', 'kubejs:item/silver_shovel', 'silver', 'tools', 'shovel', 2.5, 1.0),
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

        //Attack damage (The game adds one to this)
        5.0,

        //Attack speed
        1.7, 
    )
]

//Tiers\\

const tiers = [
    new ItemTier(
        //Name of the item tier, used for scripts
        'silver',

        //Max durability of the item
        300,

        //The mining speed of the tool
        // Low: 2 (Wood), Medium: 4, High: 8 (diamond), SuperHigh: 9 (netherite), Legendary: 10 (custom)
        6,
        //The mining level of the tool
        // Low: 1 (Wood), Medium: 4 (Iron), High: 5 (diamond), SuperHigh: (6), Legendary: 10 (custom)
        4,

        //How well the item can be enchanted at an enchantent table, cannot be enchanted at 0. Iron is 14
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
            tier.speed = x.speed;
            tier.repairIngredient = x.repairIngredient;
       })
    })
)


tools.forEach(y => 
    onEvent('item.registry', event => {
        console.log(`ZACH - Loading ${y.name}...`)  
        event.create(y.id, y.type)
            .displayName(y.name)
            .texture(y.texture)
            .tier(y.tier)
            .group(y.group)
            .type(y.type)
            .attackDamageBonus(y.damage)
            .speed(y.speed)

    })
)
