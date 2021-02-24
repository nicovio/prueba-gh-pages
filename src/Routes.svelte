<script>
  import { Link, Route, Router } from "svelte-navigator";
  import About from "./About.svelte";
  import App from "./App.svelte";
</script>

<Router>
  <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
  </nav>
  <div>
    <Route path="/">
      <App />
    </Route>
    <Route path="about" component={About} />
  </div>
</Router>
