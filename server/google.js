ServiceConfiguration.configurations.remove({
    service: "google"
});
ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "566805030194-g2v61ecdupsfvvilv9ohc41r1i347o3t.apps.googleusercontent.com",
    loginStyle: "redirect",
    secret: "0t22asMl12ZDmfqsk8wG7tvl"
});
Accounts.validateNewUser(function (user) {
    if (user.services.google.email.match(/bisd303\.org$/)) {
        return true;
    }
    if (user.services.google.email.match(/frogrock\.org$/)) {
        return true;
    }
    if (user.services.google.email.match(/slattery\.tech$/)) {
        return true;
    }
    throw new Meteor.Error(403, "You must sign in using a school account.");
});
