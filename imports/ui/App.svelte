<script>
  import { Meteor } from "meteor/meteor";
  import LoginForm from "./LoginForm.svelte";

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
  // if (user) {

  //     isLoading = !handler.ready();

  //     const userFilter = { userId: user._id };
  //     const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  //     tasks = TasksCollection.find(
  //             hideCompleted ? pendingOnlyFilter : userFilter,
  //             { sort: { createdAt: -1 } }
  //         ).fetch();

  //     incompleteCount = TasksCollection.find(pendingOnlyFilter).count();

  //     pendingTasksTitle = `${
  //       incompleteCount ? ` (${incompleteCount})` : ''
  //     }`;
  // }

  const logout = () => Meteor.logout();
</script>

<div class="flex flex-col min-h-screen bg-gray-200">
  <header class="h-10 bg-red-400">Coming soon</header>
  <main class="flex-grow">
    {#if user}
      <p>logged in</p>
      <div class="user" on:click={logout}>
        {user.username} | LOGOUT
      </div>
    {:else}
      <LoginForm />
    {/if}
  </main>
  <footer class="fixed inset-x-0 bottom-0 h-10 text-white bg-black">
      Num users online: {userCount}
  </footer>
</div>
