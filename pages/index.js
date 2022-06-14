import Link from "next/link"

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(p => p).pop();
  return(
    <li><Link href={`/pokemones/${id}`}>{ pokemon.name }</Link></li>
  )
}

export default function Pokemones( { pokemones } ) {
  return (
    <div>
      <ul>
        {pokemones.map(p =>  <Pokemon pokemon={p} key={p.name} /> )}
      </ul>
    </div>
  )
}

export const getStaticProps =  async () => {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await resp.json();

  return{
    props: {
      pokemones: data.results
    }
  }
}
