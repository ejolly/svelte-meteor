<script>
  import { fade, slide, fly } from "svelte/transition";
  export let message;
  export let username;
  const you = message.from === username;
  const them = message.to === username;
  const formattedDateTime = `${message.createdAt.toLocaleTimeString()}, ${message.createdAt.toLocaleDateString()}`;
  const formattedTime = `${message.createdAt.toLocaleTimeString()}`;

  function scrollIntoView(node) {
    node.scrollIntoView({ block: "end", inline: "nearest" });
  }
</script>

<li class="flex" class:justify-start={them} class:justify-end={you}>
  <div class="max-w-xl">
    <div
      class="px-4 py-2 text-white shadow rounded-xl"
      class:bg-gray-500={them}
      class:bg-blue-500={you}
      in:fly={{ x: 100 }}
    >
      <p>
        {message.text}
      </p>
    </div>
  </div>
</li>
<div
  class="text-xs text-gray-500"
  class:text-right={you}
  class:text-left={them}
  use:scrollIntoView
>
  <p>{formattedTime}</p>
</div>
