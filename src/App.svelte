<script>
  import { onMount } from "svelte";

  let jugador;

  async function getPlayer(nombre, apellido) {
    jugador = await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${nombre}%20${apellido}`
    );
  }

  onMount(getPlayer("lionel", "messi"));
</script>

<main>
  {#if jugador}
    <h1>Nombre: {jugador.strPlayer}</h1>
    <h1>Equipo actual: {jugador.strTeam}</h1>
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
