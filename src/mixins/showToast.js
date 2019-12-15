export const showToast = {
    methods: {
        showAndroidToast: function(toast) {
            if(window.Mobile) {
                if(typeof android !== 'undefined') {
                    android.showToast(toast)
                }
            }
            else
                console.log("Not mobile")
        },
  
        getMobileOS: function() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent)) {
                return "Windows Phone";
            }
  
            if (/android/i.test(userAgent)) {
                return "Android";
            }
  
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "iOS";
            }
  
            return "unknown";
        }
    }
}