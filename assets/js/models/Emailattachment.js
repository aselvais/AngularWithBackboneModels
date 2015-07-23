/**
 * Emailattachment model class
 */
var Emailattachment = Backbone.Model.extend({
    /**
     * Model attributes definition
     */
    defaults: {
        filename: null,
        filelocation: null,
        thumbnaillocation: null,
        filetype: null,
        filesize: null
    },
    /**
     *
     */
    displaySomeMessage: function() {
        alert('This is from a method in the Emailattachment model.');
    }
});