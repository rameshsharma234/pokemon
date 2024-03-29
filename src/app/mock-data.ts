export const MOCK_POKEMONS = {
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
      {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
          "name": "venusaur",
          "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
          "name": "charmander",
          "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
          "name": "charmeleon",
          "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
          "name": "squirtle",
          "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
          "name": "wartortle",
          "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
          "name": "blastoise",
          "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
          "name": "caterpie",
          "url": "https://pokeapi.co/api/v2/pokemon/10/"
      }
  ]
}


export const MOCK_POKEMON_DETAIL = {
  "abilities": [
      {
          "ability": {
              "name": "overgrow",
              "url": "https://pokeapi.co/api/v2/ability/65/"
          },
          "is_hidden": false,
          "slot": 1
      },
  ],
  "base_experience": 64,
  "cries": {},
  "forms": [
      {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
      }
  ],
  "game_indices": [
    {
      "game_index": 153,
      "version": {
          "name": "red",
          "url": "https://pokeapi.co/api/v2/version/1/"
      }
  },
  ],
  "height": 7,
  "held_items": [],
  "id": 1,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
  "moves": [],
  "name": "bulbasaur",
  "order": 1,
  "past_abilities": [],
  "past_types": [],
  "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
  "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
      "other": {
          "dream_world": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              "front_female": null
          },
          "home": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
              "front_shiny_female": null
          },
          "official-artwork": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          "showdown": {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
              "front_shiny_female": null
          }
      }
  },
  "stats": [
      {
          "base_stat": 45,
          "effort": 0,
          "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
          }
      }
  ],
  "types": [
      {
          "slot": 1,
          "type": {
              "name": "grass",
              "url": "https://pokeapi.co/api/v2/type/12/"
          }
      }
  ],
  "weight": 69
}


export const MOCK_POKEMON_SPECIES = {
  "base_happiness": 50,
  "capture_rate": 45,
  "color": {
      "name": "green",
      "url": "https://pokeapi.co/api/v2/pokemon-color/5/"
  },
  "egg_groups": [],
  "evolution_chain": {},
  "evolves_from_species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
  "flavor_text_entries": [{}],
  "form_descriptions": [],
  "forms_switchable": false,
  "gender_rate": 1,
  "genera": [],
  "generation": {
      "name": "generation-i",
      "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "growth_rate": {
      "name": "medium-slow",
      "url": "https://pokeapi.co/api/v2/growth-rate/4/"
  },
  "habitat": {
      "name": "grassland",
      "url": "https://pokeapi.co/api/v2/pokemon-habitat/3/"
  },
  "has_gender_differences": false,
  "hatch_counter": 20,
  "id": 2,
  "is_baby": false,
  "is_legendary": false,
  "is_mythical": false,
  "name": "ivysaur",
  "names": [],
  "order": 2,
  "pal_park_encounters": [],
  "pokedex_numbers": [],
  "shape": {
      "name": "quadruped",
      "url": "https://pokeapi.co/api/v2/pokemon-shape/8/"
  },
  "varieties": [
      {
          "is_default": true,
          "pokemon": {
              "name": "ivysaur",
              "url": "https://pokeapi.co/api/v2/pokemon/2/"
          }
      }
  ]
}


export const MOCK_POKEMON_EVOLUTION_CHAIN = {
  "baby_trigger_item": null,
  "chain": {
      "evolution_details": [],
      "evolves_to": [
          {
              "evolution_details": [
                  {
                      "gender": null,
                      "held_item": null,
                      "item": null,
                      "known_move": null,
                      "known_move_type": null,
                      "location": null,
                      "min_affection": null,
                      "min_beauty": null,
                      "min_happiness": null,
                      "min_level": 16,
                      "needs_overworld_rain": false,
                      "party_species": null,
                      "party_type": null,
                      "relative_physical_stats": null,
                      "time_of_day": "",
                      "trade_species": null,
                      "trigger": {
                          "name": "level-up",
                          "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
                      },
                      "turn_upside_down": false
                  }
              ],
              "evolves_to": [
                  {
                      "evolution_details": [
                          {
                              "gender": null,
                              "held_item": null,
                              "item": null,
                              "known_move": null,
                              "known_move_type": null,
                              "location": null,
                              "min_affection": null,
                              "min_beauty": null,
                              "min_happiness": null,
                              "min_level": 32,
                              "needs_overworld_rain": false,
                              "party_species": null,
                              "party_type": null,
                              "relative_physical_stats": null,
                              "time_of_day": "",
                              "trade_species": null,
                              "trigger": {
                                  "name": "level-up",
                                  "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
                              },
                              "turn_upside_down": false
                          }
                      ],
                      "evolves_to": [],
                      "is_baby": false,
                      "species": {
                          "name": "venusaur",
                          "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
                      }
                  }
              ],
              "is_baby": false,
              "species": {
                  "name": "ivysaur",
                  "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
              }
          }
      ],
      "is_baby": false,
      "species": {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
      }
  },
  "id": 1
}
