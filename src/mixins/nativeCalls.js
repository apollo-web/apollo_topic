export const nativeCalls = {
    methods: {
        showToast: function(toast) {
            if(this.getMobileOS2() === 'Android') {
                window.android.showToast(toast)
            }
            else if(this.getMobileOS2() === 'iOS') {
                self.location.href = "inapp://buttontest"
            }
            else
                console.log("Not Mobile")
        },

        closeView: function() {        
          if (window.android) {
            // Call Android interface
            window.android.close();
          } else if (window.webkit
              && window.webkit.messageHandlers
              && window.webkit.messageHandlers.firebase) {
            // Call iOS interface
            var message = {
              command: 'close',
              name: 'close_topic'
            };
            window.webkit.messageHandlers.firebase.postMessage(message);
          } else {
            // No Android or iOS interface found
            console.log("No native APIs found: close");
          }
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
        
          if (window.android) {
            // Call Android interface
            window.android.logEvent(name, JSON.stringify(params));
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
            console.log("No native APIs found:" + name);
          }
        },
        
        setUserProperty: function(name, value) {
          if (!name || !value) {
            return;
          }
        
          if (window.android) {
            // Call Android interface
            window.android.setUserProperty(name, value);
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
        },

        setScreen: function(name) {
          if (!name) {
            return;
          }
        
          if (window.android) {
            // Call Android interface
            window.android.setScreen(name);
          } else if (window.webkit
              && window.webkit.messageHandlers
              && window.webkit.messageHandlers.firebase) {
            // Call iOS interface
            var message = {
              command: 'setScreen',
              name: name
            };
            window.webkit.messageHandlers.firebase.postMessage(message);
          } else {
            // No Android or iOS interface found
            console.log("No native APIs found. setScreen2 " + name);
          }
        },

        selectTutor: function(name, url) {
          if (!name) {
            return;
          }
        
          if (window.android) {
            // Call Android interface
            window.android.selectTutor(name, url);
          } else if (window.webkit
              && window.webkit.messageHandlers
              && window.webkit.messageHandlers.firebase) {
            // Call iOS interface
            var message = {
              command: 'selectTutor',
              name: name,
              url: url
            };
            window.webkit.messageHandlers.firebase.postMessage(message);
          } else {
            // No Android or iOS interface found
            console.log("No native APIs found. selectTutor " + name + ", " + url);
          }
        },
    }
}