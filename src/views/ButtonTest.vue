<template>
    <div id="buttonTest">
        <p>Testing</p>
        <button class="button_test" @click="showAndroidToast('Hello Android!')">Click</button>
    </div>
</template>

<script>

export default {
  name: 'buttonTest',

  methods:
  {
    showAndroidToast: function(toast) {
      android.showToast(toast);
    }
  },
}
</script>

<style>
#buttonTest
{
  width: 100%;
  text-align: center;
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
