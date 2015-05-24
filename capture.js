/*
 *	Date: 2015-05-23
 */

var captureCallback = {};

	function captureSuccess(mediaFiles) {
		captureCallback(mediaFiles[0]);
/*        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
*/
    }

    // Called if something bad happens.
    //
    function captureError(error) {
		alert(error.code);
/*        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
*/
    }

    // A button will call this function
    //
    function captureVideo(callback) {
		captureCallback = callback;
        // Launch device video recording application,
        // allowing user to capture 1 video clips
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1});
    }
