<script>
  import { navigate } from "svelte-navigator";

  function volverAHome() {
    navigate("/");
  }
</script>

<main>
  <br />
  <div>Hola que tal</div>
  <button on:click={volverAHome}>Volver a home</button>
</main>

<style>
  button {
    margin-top: 2rem;
  }
</style>
