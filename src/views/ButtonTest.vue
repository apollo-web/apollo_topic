<template>
    <div id="buttonTest">
        <p>Testing</p>
        <a class="yourButton" href="inapp://buttontest">
          <button class="button_test" @click="showAndroidToast('Hello Android!')">Click</button>
        </a>
        <router-view></router-view>

    </div>
</template>

<script>
import { showToast } from '@/mixins/showToast.js'

export default {
  name: 'buttonTest',

  mixins: [
    showToast,
  ],
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
