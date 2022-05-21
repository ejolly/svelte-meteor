<script>
  export let message;
  export let username;
  const you = message.from === username;
  const them = message.to === username;
  const formattedDateTime = `${message.createdAt.toLocaleTimeString()}, ${message.createdAt.toLocaleDateString()}`;
  const formattedTime = `${message.createdAt.toLocaleTimeString()}`;
</script>

<li class="flex" class:justify-start={them} class:justify-end={you}>
  <div class="max-w-xl">
    <div
      class="px-4 py-2 text-white shadow rounded-xl"
      class:bg-gray-500={them}
      class:bg-blue-500={you}
    >
      <p>
        {message.text}
      </p>
    </div>
  </div>
</li>
<div class="text-xs text-gray-500" class:text-right={you} class:text-left={them}>
  <p>{formattedTime}</p>
</div>
