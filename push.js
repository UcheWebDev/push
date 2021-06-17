var push = require('web-push');
// let vapidkeys = push.generateVAPIDKeys();
let vapidkeys = {
    publicKey: 'BGXw6wxKhmgFHQkeONsea1mDNH8ACLGy3zDejpdQLjM4WlPkvhfEkKec7FWg7vP8-OkzT8ijeLJql9vGb2mPjX8',
    privateKey: 'DPJO6E4LHQlYApvOY6pmQF21uxouWR0v-BuOjDcKWwo'
  };


  push.setVapidDetails('mailto:publicgist321@gmail.com',vapidkeys.publicKey, vapidkeys.privateKey)
let sub = { 

};
  push.sendNotification(sub, 'test message')