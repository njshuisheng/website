<template>
  <div class="container" style="background-color: #fff;">
    <div class="col-xs-12">
      <h3 class="text-center">旗下商品</h3>
    </div>
    <div class="row">
      <div id="ProZidingyi">
        <div class="pianos col-lg-10 col-lg-offset-1">
          <div class="col-xs-12">
            <div class="onpure_bg">
              <h4 class="onpure">
                <span class="onpure_title">商品列表</span>
              </h4>
              <span class="line"></span>
            </div>
          </div>
          <div class="col-lg-4" v-for="tmp in product" @click="onDetails(tmp)">
            <a href="javascript:;" :title="tmp.title">
              <div class="pianos_list">
                <div class="pianos_cover">
                  <img
                    class="img img-responsive"
                    :src="tmp.img_url"
                    :alt="tmp.title"
                  />
                </div>
                <div class="pianos_subname">
                  <p></p>
                </div>
                <div class="pianos_name">
                  <p>{{ tmp.title }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div
        class="page_box"
        style="width: 100%; padding-top: 5px; padding-bottom: 8px"
      ></div>
    </div>
  </div>
</template>
<script setup>
import axios from '../api'
import { onMounted, ref } from 'vue'
const product = ref([])
const emit = defineEmits(['onDetails'])
function onDetails(tmp) {
  axios.post('/xkgw/qt/getProduct', { id: tmp.id }).then((res) => {
    if (res.retCode === 0) {
      emit('onDetails', res.data)
    }
  })
}


function onInitData() {
  axios.post('/xkgw/qt/getInformationBybutton', { type: 3 }).then((res) => {
    if (res.retCode === 0) {
      product.value = res.data.products
    }
  })
}

onMounted(() => {
  onInitData()
})
</script>
