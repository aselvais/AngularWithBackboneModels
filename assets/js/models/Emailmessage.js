/**
 * Email message model class
 */
var Emailmessage = Backbone.Model.extend({
    /**
     * Model attributes definition
     */
    defaults: {
        subject: null,
        value: 0,
        from: null,
        to: null,
        body: null,
        selected: false,
        hasattachments: false,
        emailattachmentCollection: null
    },
    /**
     * We could implement a service call here ...
     */
    getRemoteHeaders: function () {
        // ...
    },
    /**
     * Init and returns attachement collection
     * @returns {null}
     */
    getAttachments: function () {
        if (this.attributes.hasattachments === true && this.attributes.emailattachmentCollection === null)
        {
            this.set('emailattachmentCollection', new EmailattachmentCollection(attachData));
        }
        return this.get('emailattachmentCollection');
    }
});