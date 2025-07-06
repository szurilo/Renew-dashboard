<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")

  import { onMount } from "svelte"
  let { data } = $props()
  let { supabase } = data
  import { page } from "$app/stores"

  let redirectUri = $state<string | null>(null)
  redirectUri = $page.url.searchParams.get("redirect_uri")

  onMount(async () => {
    console.log("redirectUri", redirectUri)
    if (redirectUri) {
      const { data: session } = await supabase.auth.getSession()
      window.location.href = redirectUri + `/auth?token=${session.session?.access_token}`
    }
  })
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>
<a href="vscode:extension/renew.renew">
  <button class="btn btn-primary btn-sm px-6">Install extension</button>
</a>
<a data-canny-link href="https://renew.canny.io" target="_blank">
  <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2">
    Give feedback
  </button>
</a>
