<template>
  <view class="block">
    <view class="block-title">
      {{ title }}
    </view>
    <view class="block-content">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Block",
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.block {
  &-title {
    padding: 30rpx;
    font-size: 26rpx;
    color: rgba(69, 90, 100, 0.6);
  }
}
</style>