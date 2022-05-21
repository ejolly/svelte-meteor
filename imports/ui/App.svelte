<script>
  import { Meteor } from "meteor/meteor";
  import LoginForm from "./LoginForm.svelte";
  import ChatUI from "./chatui/ChatUI.svelte";

  let numUsers = 0;
  let user = null;
  let loading = true;

  $m: {
    user = Meteor.user();
    let handler = Meteor.subscribe("userStatuses");
    loading = !handler.ready();
    numUsers = Meteor.users.find().fetch().length;
  }
  $: userCount = loading ? 'loading' : numUsers;

</script>

<div class="flex flex-col min-h-screen bg-gray-200">
  <header class="h-10 bg-red-400">Coming soon</header>
  <main class="flex-grow">
    {#if user}
    <ChatUI/>
    {:else}
      <LoginForm />
    {/if}
  </main>
  <footer class="fixed inset-x-0 bottom-0 h-10 text-white bg-black">
      Num users online: {userCount}
  </footer>
</div>
