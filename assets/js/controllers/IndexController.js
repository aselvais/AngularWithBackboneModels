/**
 * Controller binding data
 * @param $scope
 * @constructor
 */
angular.module('webmailApp', []).controller('IndexController', ['$scope', '$sce', function ($scope, $sce)
{
	// init scope vars
	$scope.htmlBody = "";
	$scope.htmlBodyMessage = "";
	$scope.emailmessageCollection;
	$scope.rootEmailmessageCollection;
	$scope.rootSearch;

	// init models
	var emailmessageCollection = new EmailmessageCollection();
	emailmessageCollection.initCollection();
	$scope.emailmessageCollection = emailmessageCollection;
	$scope.rootEmailmessageCollection = emailmessageCollection.search();
	/**
	 *
	 */
	$scope.selectThisMessage = function(message)
	{
		emailmessageCollection.selectMessage(message);
		$scope.htmlBodyMessage = $sce.trustAsHtml(emailmessageCollection.getSelected().get('body'));
	}
	/**
	 *
	 */
	$scope.addData = function()
	{
		$scope.emailmessageCollection.initCollection();
		$scope.rootEmailmessageCollection = emailmessageCollection.search($scope.rootSearch);
	}

}]);