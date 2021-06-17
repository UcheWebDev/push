var push = require('web-push');
// let vapidkeys = push.generateVAPIDKeys();
let vapidkeys = {
    publicKey: 'BGXw6wxKhmgFHQkeONsea1mDNH8ACLGy3zDejpdQLjM4WlPkvhfEkKec7FWg7vP8-OkzT8ijeLJql9vGb2mPjX8',
    privateKey: 'DPJO6E4LHQlYApvOY6pmQF21uxouWR0v-BuOjDcKWwo'
  };


  push.setVapidDetails('mailto:publicgist321@gmail.com',vapidkeys.publicKey, vapidkeys.privateKey)
let sub =
    {
        endpoint:"https://fcm.googleapis.com/fcm/send/cHWS9PBn9PE:APA91bGQAtZVJkCdakn-vCpThvYgP3bz60PzZXBWfbUhaV1TxGGaltdDnNoWCUPM4mPF2sY5XmjoDXwUHdyVkomO6-6n5K8anNFSUJ2vqCFOTMI6LQJ4bmxQ3KxToiHYRBQJAQ1koqvB",
    expirationTime:null,
    keys:{
        p256dh:"BGlGga58p0B5BxWsJjwdDwCgZyFiXKgu_xNKazBU12p7WM01w7Pml7y4-A0zBehNdTMoszc3SomrbYfn9NERA5s",
        auth:"QRq7JIYibHVN1ehsCadc3A"}}
;

function testpush(){
    push.sendNotification(sub, 'test message')
}
testpush();