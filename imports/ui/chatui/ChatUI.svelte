<script>
  import { Meteor } from "meteor/meteor";
  import ProfileHeader from "./ProfileHeader.svelte";
  import MessageList from "./MessageList.svelte";
  import Input from "./Input.svelte";

  let username = null;
  $m: {
    username = Meteor.user().username;
  }
</script>

<div class="max-w-screen-md mx-auto">
  <div>
    <div class="w-full">
      <ProfileHeader {username} />
      <MessageList {username} />
      <Input {username} />
    </div>
  </div>
</div>
