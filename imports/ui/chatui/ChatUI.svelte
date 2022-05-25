<script>
  // Parent-most chat component
  import { Meteor } from "meteor/meteor";
  import ProfileHeader from "./ProfileHeader.svelte";
  import MessageList from "./MessageList.svelte";
  import Input from "./Input.svelte";

  let username = null;
  $m: {
    username = Meteor.user().username;
  }
  const handleTyping = () => {
    console.log("typing");
    // TODO: Change this to a deferred db write that changes my own user status to
    // 'typing'. Then share user statuses as subscriptions and let animations be bound
    // to the value of the subscription
  };
</script>

<div class="max-w-screen-md mx-auto">
  <div>
    <div class="w-full">
      <ProfileHeader {username} />
      <MessageList {username} />
      <Input {username} on:typing={handleTyping} />
    </div>
  </div>
</div>
