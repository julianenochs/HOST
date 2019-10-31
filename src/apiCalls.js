export const searchCocktailsByName = async (cocktailName) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
  if(!response.ok) {
    throw Error('failed to get cocktail by name')
  } else {
    let cocktailsByName = await response.json()
    console.log('cocktailsByName', cocktailsByName)
  }
}