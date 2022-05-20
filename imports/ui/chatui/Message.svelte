<script>
  export let style = "you";
  const you = style == "you";
  const them = style == "them";
</script>

<li class="flex" class:justify-start={them} class:justify-end={you}>
  <div
    class="relative max-w-xl px-4 py-2 text-white shadow rounded-xl"
    class:bg-gray-500={them}
    class:bg-blue-500={you}
  >
    <span class="block">
        <slot></slot>
    </span>
  </div>
</li>
