<template>
  <div>
    <p class="card">
      {{text}}
    </p>
      <van-button :plain="true" @click="clickHandle" class="left" size="mini" type="primary">这是一个按钮</van-button>

  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
