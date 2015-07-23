/**
 * Controller binding data
 * @param $scope
 * @constructor
 */
angular.module('webmailApp', []).controller('IndexController', function ($scope) {
    var emailmessageCollection = new EmailmessageCollection();
    emailmessageCollection.initCollection();
    $scope.emailmessageCollection = emailmessageCollection;
});