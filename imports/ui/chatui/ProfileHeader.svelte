<script>
  import { Meteor } from "meteor/meteor";
  export let username;
</script>

<div class="flex items-center justify-between p-3 border-b border-gray-300">
  <div class="relative flex items-center">
    <img
      class="object-cover w-10 h-10 border border-gray-500 rounded-full"
      src="https://cdn-icons-png.flaticon.com/512/944/944268.png"
      alt="username"
    />
    <span class="block ml-2 font-bold text-gray-600">{username}</span>
    <span
      class="absolute w-3 h-3 bg-green-500 border border-black rounded-full top-7 left-7"
    />
  </div>
  <div>
    <button
      class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      style="
            background: linear-gradient(
                to right,
                #ee7724,
                #d8363a,
                #dd3675,
                #b44593
            );
            "
      on:click={() => Meteor.logout()}
    >
      Log Out
    </button>
  </div>
</div>
