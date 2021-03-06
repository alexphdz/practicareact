//import Image from "next/link";
import Link from "next/link";
const Pokemon = ({ data }) => {
    return(
        <div>
            <h1>Hola soy {data.name} :)</h1>
            <img src={data.sprites.front_default}  width={400} height={400}/>
            <Link href="/">Volver al inicio</Link>
        </div>
    )
}


export default Pokemon;

export const getServerSideProps = async ({params})  => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await response.json();
    return { props: {data}}
}