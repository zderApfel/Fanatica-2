onEvent('item.registry', event => {
    event.create('silver_sword', 'sword')
    .displayName("Silver Sword")
    .texture("kubejs:item/silver_sword")
    .tier("silver")
    .group("combat")
    .attackDamageBaseline(0.0)
    .attackDamageBonus(4.0)
    .speed(1.6)  
})


