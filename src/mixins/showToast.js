export const showToast = {
    methods: {
        showToast: function(toast) {
            if(this.getMobileOS() === 'Android') {
                android.showToast(toast)
            }
            else if(this.getMobileOS() === 'iOS') {
                self.location.href = "inapp://buttontest"
            }
            else
                console.log("Not Mobile")
        },

        closeView: function() {
            if(this.getMobileOS() === 'Android') {
                console.log("Android")
                android.close()
            }
            else if(this.getMobileOS() === 'iOS') {
                console.log("iOS")
                self.location.href = "inapp://close"
            }
            else
                console.log("Not Mobile")
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