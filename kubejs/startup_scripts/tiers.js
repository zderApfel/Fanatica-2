onEvent('item.registry.tool_tiers', event => {
  event.add('silver', tier =>{
      tier.uses = 200
      tier.level = 2
      tier.enchantmentValue = 21
      tier.repairIngredient="#forge:ingots/silver"
      })
})