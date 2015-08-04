/*
 *    Date: 2015-05-23
 */
function gapCapture () {

    var self = {};

    self.captureAudioCallback = null;
    self.captureVideoCallback = null;
    self.captureImageCallback = null;

    self.ErrorCode = [
        "The camera or microphone failed to capture image or sound.",
        "The camera or audio capture application is currently serving another capture request.",
        "Invalid use of the API (e.g., the value of limit is less than one).",
        "The user exits the camera or audio capture application before capturing anything.",
        "The requested capture operation is not supported."
        ];

    // Called if something bad happens.
    //
    self.captureError = function(error) {
        alert(self.ErrorCode[error.code]);
    }
    //
    self.captureAudio = function (callback) {
        self.captureAudioCallback = callback;
        // Launch device video recording application,
        // allowing user to capture 1 video clips
        capture.captureAudio(function(mediaFiles) {
                self.captureAudioCallback(mediaFiles[0]);
        },
        self.captureError,
        {limit: 1, duration: 10});
    }
    //
    self.captureVideo = function (callback) {
        self.captureVideoCallback = callback;
        // Launch device video recording application,
        // allowing user to capture 1 video clips
        capture.captureVideo(function(mediaFiles) {
                self.captureVideoCallback(mediaFiles[0]);
        },
        self.captureError,
        {limit: 1, duration: 10});
    }
    //
    self.captureImage = function (callback) {
        self.captureImageCallback = callback;
        // Launch device video recording application,
        // allowing user to capture 1 video clips
        console.log('calling captureImage');
        capture.captureImage(function(mediaFiles) {
                self.captureImageCallback(mediaFiles[0]);
        },
        self.captureError,
        {limit: 1});
        console.log('done with captureImage');
    }

};
