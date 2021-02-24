<script>
  import { Link, Router, useNavigate } from "svelte-navigator";
  import { API_URL } from "../src/constants";

  let jugador;
  let textoBusqueda;

  const navigate = useNavigate();

  async function buscarJugador() {
    const response = await fetch(
      `${API_URL}/searchplayers.php?p=${textoBusqueda}`
    );

    const {
      player: [jugadorEncontrado],
    } = await response.json();

    jugador = jugadorEncontrado;
  }

  function navegarAAbout() {
    navigate("/about");
  }
</script>

<main>
  <h3>Ambiente: {process.env.isProd ? "Producción" : "Desarrollo"}</h3>
  <h4>Buscar jugador</h4>
  <input bind:value={textoBusqueda} type="text" />
  <button disabled={!textoBusqueda} on:click={buscarJugador}>Buscar</button>
  {#if jugador}
    <h1>Nombre: {jugador.strPlayer}</h1>
    <h1>
      Equipo actual: {jugador.strTeam != "_Retired Soccer"
        ? jugador.strTeam
        : "-"}
    </h1>
  {/if}
  <div>
    <button on:click={navegarAAbout}>About</button>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
