<script>
  import { Meteor } from "meteor/meteor";
  import Message from "./Message.svelte";
  let message;
  let user;
  $m: {
    user = Meteor.user().username;
  }
  const sendMessage = (ev) => {
    if (ev.code === "Enter" && message) {
      console.log("send!");
      message = null;
    }
  };
</script>

<div class="max-w-screen-md mx-auto">
  <div>
    <div class="w-full">
      <div class="flex items-center justify-between p-3 border-b border-gray-300">

        <!-- Header -->
        <div class="relative flex items-center">
          <img
            class="object-cover w-10 h-10 border border-gray-500 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/944/944268.png"
            alt="username"
          />
          <span class="block ml-2 font-bold text-gray-600">{user}</span>
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

      <!-- Message list -->
      <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
        <ul class="space-y-2">
          <Message style={"them"}>Hi</Message>
          <Message style={"you"}>Hiii</Message>
          <Message style={"you"}>How are you?</Message>
          <Message style={"them"}>Been better, but on the up and up</Message>
        </ul>
      </div>

      <!--  Text input bar -->
      <div
        class="flex items-center justify-between w-full p-3 border-t border-gray-300"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Message"
          class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
          name="message"
          required
          bind:value={message}
          on:keyup={sendMessage}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>
        <button>
          <svg
            class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
