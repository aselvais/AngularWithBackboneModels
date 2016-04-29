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
	getSelected: function ()
	{
		return this.findWhere({selected: true});
	},
	/**
	 * Change the selected param of a message model
	 * and sets the other to false
	 * @param messageModel
	 */
	selectMessage: function (messageModel)
	{
		var oldSelected = this.findWhere({selected: true});
		if (typeof oldSelected === 'object')
			oldSelected.set('selected', false)
		messageModel.set('selected', true);
	},
	/**
	 * Compute the total value
	 * @returns {number}
	 */
	totalValue: function ()
	{
		var total = 0;
		this.forEach(function (model)
		{
			total += model.get('value');
		});
		return total;
	},
	/**
	 * Simple search on the subject
	 * @param {String} val Text to search for
	 */
	search: function(val)
	{
		if (typeof val != 'undefined')
		{
			var pattern = new RegExp(val,"gi");
			return this.filter(function(data) {
				return pattern.test(data.get("subject"));
			});
		}
		else
			return this.models;

	},
	/**
	 * Adds data to the collection, This should be a service call
	 */
	initCollection: function ()
	{
		this.add(restData);
	}
});