<script>
  let jugador;
  let textoBusqueda;

  async function buscarJugador() {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${textoBusqueda}`
    );

    const {
      player: [jugadorEncontrado],
    } = await response.json();

    jugador = jugadorEncontrado;
	console.log(jugador)
  }
</script>

<main>
  <h4>Buscar jugador</h4>
  <input bind:value={textoBusqueda} type="text" />
  <button on:click={buscarJugador}>Buscar</button>
  {#if jugador}
    <h1>Nombre: {jugador.strPlayer}</h1>
    <h1>Equipo actual: {jugador.strTeam != "_Retired Soccer" ? jugador.strTeam : "-"}</h1>
  {/if}
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
