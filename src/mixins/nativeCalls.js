export const nativeCalls = {
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
        },

        getMobileOS2: function() {
            if (window.android) {
                // Call Android interface
                return "Android";
              } else if (window.webkit
                  && window.webkit.messageHandlers
                  && window.webkit.messageHandlers.firebase) {
                // Call iOS interface
                return "iOS";
              } else {
                // No Android or iOS interface found
                return "Unknown";
              }
        },

        logEvent: function(name, params) {
            if (!name) {
              return;
            }
          
            if (window.AnalyticsWebInterface) {
              // Call Android interface
              window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
            } else if (window.webkit
                && window.webkit.messageHandlers
                && window.webkit.messageHandlers.firebase) {
              // Call iOS interface
              var message = {
                command: 'logEvent',
                name: name,
                parameters: params
              };
              window.webkit.messageHandlers.firebase.postMessage(message);
            } else {
              // No Android or iOS interface found
              console.log("No native APIs found.");
            }
          },
          
          setUserProperty: function(name, value) {
            if (!name || !value) {
              return;
            }
          
            if (window.AnalyticsWebInterface) {
              // Call Android interface
              window.AnalyticsWebInterface.setUserProperty(name, value);
            } else if (window.webkit
                && window.webkit.messageHandlers
                && window.webkit.messageHandlers.firebase) {
              // Call iOS interface
              var message = {
                command: 'setUserProperty',
                name: name,
                value: value
             };
              window.webkit.messageHandlers.firebase.postMessage(message);
            } else {
              // No Android or iOS interface found
              console.log("No native APIs found.");
            }
          }
    }
}