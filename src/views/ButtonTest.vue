<template>
    <div id="buttonTest">
        <p>Testing</p>
        <a class="yourButton" href="inapp://buttontest">
          <button class="button_test" @click="showAndroidToast('Hello Android!')">Click</button>
        </a>
    </div>
</template>

<script>

export default {
  name: 'buttonTest',

  methods:
  {
    showAndroidToast: function(toast) {
      //if(android !== null)
        //android.showToast(toast);
        console.log(this.getMobileOS())
      if(window.Mobile)
        console.log(this.getMobileOS())
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

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }

      return "unknown";
    }
  },
}
</script>

<style lang="scss" scoped>
#buttonTest
{
  width: 100%;
  text-align: center;
  margin-top: 4rem;
  padding-top: 3rem;
}

.button_test
{
  border : 2px solid white;
  border-radius: 8px;
  padding: 10px 50px;
  text-align: center;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
}

.button_test:focus
{
  border : 2px solid white;
}

</style>
