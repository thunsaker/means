angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
	return {
		notify: function(msg) {
			mvToastr.options = {
				"closeButton": true,
				"positionClass": "toast-bottom-full-width"
			};
			// switch(type) {
			// 	case "success":
			// 		mvToastr.success(msg):
			// 		break;
			// 	case "fail":
			// 		mvToastr.warning(msg):
			// 		break;
			// 	default:
			///		mvToastr.info(msg):
			// }
			mvToastr.info(msg);
			console.log(msg);
		}
	}
})