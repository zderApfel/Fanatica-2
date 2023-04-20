// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const shaped = [
	new ShapedRecipe(
		'kubejs:silver_sword',
		'1',
		'[ S , S , s ,]',
		{S: 'forge:ingots/silver', s: 'minecraft:stick'}
	),
	new ShapedRecipe(
		'kubejs:silver_pickaxe',
		'1',
		'[SSS, s , s ,]',
		{S: 'forge:ingots/silver', s: 'minecraft:stick'}
	),
	new ShapedRecipe(
		'kubejs:silver_shovel',
		'1',
		'[ S , s , s ,]',
		{S: 'forge:ingots/silver', s: 'minecraft:stick'}
	),
	new ShapedRecipe(
		'kubejs:silver_axe',
		'1',
		'[ SS, sS, s ,]',
		{S: 'forge:ingots/silver', s: 'minecraft:stick'}
	),
	new ShapedRecipe(
		'kubejs:silver_hoe',
		'1',
		'[ SS, s , s ,]',
		{S: 'forge:ingots/silver', s: 'minecraft:stick'}
	),
]

const shapeless = []

const recipesToDelete = []

recipesToDelete.forEach(x => {
	onEvent('recipes', event => {
		event.remove({output: x})
	})
})

shaped.forEach(x => {
	onEvent('recipes', event => {
		event.shaped(`${x.quantity}x ${x.item}`, 
			x.shape,
			x.ingredients
		)
	})	
})

shapeless.forEach(x => {
	onEvent('recipes', event => {
		event.shapeless(`${x.quantity}x ${x.item}`, x.ingredients)
	})	
})


