export interface IPokemonAPIResponse {
  results: { name: string; url: string }[];
  next: string;
  count: string;
  previous: string;
}

export interface IPokemonDetail {
  abilities: {}[];
  base_experience: number;
  cries: {};
  forms: {}[];
  game_indices: {}[];
  height: number;
  held_items: [];
  id: number;
  is_default: Boolean;
  location_area_encounters: string;
  moves: {}[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: any;
  sprites: any;
  stats: {}[];
  types: {}[];
  weight: number;
}
