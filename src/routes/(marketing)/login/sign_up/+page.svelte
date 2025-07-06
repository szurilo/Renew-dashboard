<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { page } from "$app/stores"

  let { data } = $props()

  let redirectUri = $state<string | null>(null)
  redirectUri = $page.url.searchParams.get("redirect_uri")
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Sign Up</h1>
<Auth
  supabaseClient={data.supabase}
  view="sign_up"
  redirectTo={`${data.url}/auth/callback`}
  showLinks={false}
  providers={oauthProviders}
  socialLayout="horizontal"
  appearance={sharedAppearance}
  additionalData={undefined}
/>
<div class="text-l text-slate-800 mt-4 mb-2">
  Have an account? {#if redirectUri}<a
      class="underline"
      href="/login/sign_in?redirect_uri={redirectUri}">Sign in</a
    >.
  {:else}
    <a class="underline" href="/login/sign_in">Sign in</a>.
  {/if}
</div>
