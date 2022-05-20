import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';
import "../imports/ui/main.css"

Meteor.startup(() => {
  // eslint-disable-next-line no-new
  new App({
    target: document.getElementById('app'),
  });
});
