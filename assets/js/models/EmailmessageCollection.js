/**
 * Email message collection class
 */
var EmailmessageCollection = Backbone.Collection.extend({
    /**
     * The model class to use in the collection
     */
    model: Emailmessage,
    /**
     * Returns the selected message model
     * @returns {Emailmessage}
     */
    getSelected: function () {
        var selectedModel;
        this.forEach(function (model) {
            if (model.get('selected') == true) {
                selectedModel = model;
            }
        });
        return selectedModel;
    },
    /**
     * Change the selected param of a message model
     * and sets the other to false
     * @param messageModel
     */
    selectMessage: function (messageModel) {
        this.forEach(function (model) {
            if (model === messageModel)
                model.set('selected', true);
            else
                model.set('selected', false);
        });
    },
    /**
     * Compute the total value
     * @returns {number}
     */
    totalValue: function () {
        var total = 0;
        this.forEach(function (model) {
            total += model.get('value');
        });
        return total;
    },
    /**
     * Adds data to the collection, This should be a service call
     */
    initCollection: function () {
        this.add(restData);
    }
});