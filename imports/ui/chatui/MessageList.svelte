<script>
  import { Meteor } from "meteor/meteor";
  import Message from "./Message.svelte";
  import { Messages } from "/imports/db/MessagesCollection";

  export let username;
  let loading = true;
  let messages = [];

  const handler = Meteor.subscribe("messages");

  $m: {
    loading = !handler.ready();
    messages = Messages.find({}).fetch();
  }
</script>

<div class="relative w-full p-6 overflow-y-auto h-[40rem]">
  {#if loading}
    Loading...
  {:else}
    <ul class="space-y-2">
      {#each messages as message}
        <Message {message} {username} />
      {/each}
    </ul>
  {/if}
</div>
