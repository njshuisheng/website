<template>
  <div class="container">
    <ol class="breadcrumb">
      <li>
        <a @click="onClick" class="text-purple">首页</a>
      </li>
      <li>
        <a href="javascript:;" class="text-grey">商品详情</a>
      </li>
    </ol>
    <div class="row">
      <div
        class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12"
        deep="2"
      >
        <table width="100%">
          <tbody>
            <tr class="firstRow">
              <td width="255" valign="top">
                <img
                  :src="props.good.img_url"
                  :title="props.good.title"
                />
              </td>
              <td width="186" valign="top" style="word-break: break-all; padding-left: 10px;">
                <p style="line-height: 1.75em">
                  <span style="color: rgb(227, 108, 9); font-size: 16px"
                    >{{ props.good.title }}</span
                  >
                </p>
                <p style="line-height: 1.75em">
                  <span style="font-size: 16px">{{ props.good.detail }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <br />
        </p>
      </div>
    </div>
    <div class="col-xs-12">
      <div class="onpure_bg">
        <h4 class="onpure">
          <span class="onpure_title"></span>
        </h4>
        <span class="line"></span>
      </div>
    </div>
    <div class="row">
      <div
        class="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12"
      ></div>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['onDetails'])
const props = defineProps({
  good: {
    type: Object,
    default: () => {}
  }
})
function onClick() {
  emit('onDetails')
}
</script>
