(function() {
angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [
		{name: 'C# for Dummies', featured: true, published: new Date('11/11/2014')},
		{name: 'C# for Monkeys', featured: true, published: new Date('12/4/2012')},
		{name: 'C# for Apes', featured: false, published: new Date('3/21/2011')},
		{name: 'C# for Neanderthal', featured: false, published: new Date('8/11/2014')},
		{name: 'C# for Cro-Magnon', featured: false, published: new Date('9/11/2013')},
		{name: 'C# for Erudites', featured: true, published: new Date('10/11/2013')}
	]
});
})();