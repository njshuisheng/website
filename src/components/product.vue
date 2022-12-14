<template>
  <div class="container" style="background-color: #fff;">
    <div class="col-lg-8 col-lg-offset-2">
      <img class="img img-responsive center-block" src="" alt="" />
      <h4 class="text-center">
        <b>英国希斯曼乐器国际集团有限公司</b>
      </h4>
    </div>
    <div class="col-xs-12">
      <h3 class="text-center">进口钢琴</h3>
    </div>
    <div class="row">
      <div id="ProZidingyi">
        <div class="pianos col-lg-10 col-lg-offset-1">
          <div class="col-xs-12">
            <div class="onpure_bg">
              <h4 class="onpure">
                <span class="onpure_title">进口钢琴</span>
              </h4>
              <span class="line"></span>
            </div>
          </div>
          <div class="col-lg-4" v-for="tmp in 6" @click="onDetails(tmp)">
            <a href="javascript:;" title="进口B-600">
              <div class="pianos_list">
                <div class="pianos_cover">
                  <img
                    class="img img-responsive"
                    src="/upload/p1.png"
                    alt="进口B-600"
                  />
                </div>
                <div class="pianos_subname">
                  <p></p>
                </div>
                <div class="pianos_name">
                  <p>进口B-6001</p>
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
  <div class="container">
    <div class="col-xs-12">
      <div class="onpure_bg">
        <h4 class="onpure">
          <span class="onpure_title">购琴工具</span>
        </h4>
        <span class="line"></span>
      </div>
    </div>
    <div class="col-xs-12 pur-tools">
      <a href="/html/about/2/" title="品牌故事" class="text-dark">
        <div class="col-xs-6 col-lg-3 text-center">
          <i class="fa fa-3x">
            <img src="/upload/20210127165741.png" style="margin: 0 auto" />
          </i>
          <h4 class="text-center">
            <b>品牌故事</b>
          </h4>
          <hr />
          <h5 class="text-center"></h5>
        </div>
      </a>
      <a href="/html/about/27/" title="创始人" class="text-dark">
        <div class="col-xs-6 col-lg-3 text-center">
          <i class="fa fa-3x">
            <img src="/upload/20210127165816.png" style="margin: 0 auto" />
          </i>
          <h4 class="text-center">
            <b>创始人</b>
          </h4>
          <hr />
          <h5 class="text-center"></h5>
        </div>
      </a>
      <a href="/html/product/1/" title="三角钢琴" class="text-dark">
        <div class="col-xs-6 col-lg-3 text-center">
          <i class="fa fa-3x">
            <img src="/upload/20210127165822.png" style="margin: 0 auto" />
          </i>
          <h4 class="text-center">
            <b>三角钢琴</b>
          </h4>
          <hr />
          <h5 class="text-center"></h5>
        </div>
      </a>
      <a href="/html/product/5/" title="立式钢琴" class="text-dark">
        <div class="col-xs-6 col-lg-3 text-center">
          <i class="fa fa-3x">
            <img src="/upload/20210128102130.png" style="margin: 0 auto" />
          </i>
          <h4 class="text-center">
            <b>立式钢琴</b>
          </h4>
          <hr />
          <h5 class="text-center"></h5>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['onDetails'])
function onDetails() {
  emit('onDetails')
}
</script>
