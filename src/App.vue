<template>
  <div :class="{ 'grey-bg': active === 'main' }">
    <!-- header -->
    <div class="header">
      <div class="container">
        <nav class="navbar navbar-inverse" role="navigation">
          <div class="navbar-header">
            <div
              id="nav-toggle"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-nav"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
            <a href="#" class="navbar-brand scroll-top">
              <div class="logo"></div>
            </a>
          </div>
          <div id="main-nav" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="hidden-md hidden-sm">
                <a href="javascript:;" @click="onChangeRoute('main')">
                  <span>首页</span>
                  <font>Home</font>
                </a>
              </li>
              <li class="hidden-md hidden-sm">
                <a href="javascript:;" @click="onLocationNews">
                  <span>新闻资讯</span>
                  <font>News</font>
                </a>
              </li>
              <li class="hidden-md hidden-sm">
                <a href="javascript:;" @click="onChangeRoute('product')">
                  <span>旗下产品</span>
                  <font>Under Brand</font>
                </a>
              </li>
              <li class="hidden-md hidden-sm">
                <a href="javascript:;" @click="onChangeRoute('contact')">
                  <span>关于我们</span>
                  <font>About Us</font>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <!-- banner -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="(tmp, idx) in banner"
          data-target="#myCarousel"
          data-slide-to="0"
          :class="{ active: idx === 0 }"
        ></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div
          v-for="(tmp, idx) in banner"
          class="item"
          :class="{ active: idx === 0 }"
        >
          <img
            :src="tmp.resource_url"
            style="width: 100%;"
            class="first-slide img img-responsive hidden-xs"
          />
          <a class="hidden-lg hidden-sm hidden-md" href="">
            <img
              :src="tmp.resource_url"
              class="first-slide img img-responsive hidden-lg hidden-sm hidden-md"
            />
          </a>
          <div class="container">
            <div class="carousel-caption">
              <p class="visible-lg">
                <a class="btn btn-md btn-danger2" href="">了解更多</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        class="left carousel-control"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span
          class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="right carousel-control"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span
          class="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- 首页 -->
    <div v-if="active === 'main'" class="container">
      <div class="col-xs-12 padding-xs">
        <div class="newsmain">
          <div class="newstitle">
            <h4>公司视频</h4>
            <p></p>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <video
          autoplay
          style="width: 100%; height: 100%"
          controls
          preload="auto"
        >
          <source :src="video.resource_url" />
          您的浏览器不支持 HTML5 video 标签
        </video>
      </div>
      <!-- 公司介绍 -->
      <div class="col-xs-12 padding-xs">
        <div class="newsmain">
          <div class="newstitle">
            <h4>公司介绍</h4>
            <p></p>
          </div>
          <div class="modileTitle"><h5>公司介绍</h5></div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="newsmain">
          <ul>
            <li v-for="tmp in intro" :key="tmp.id" class="one">
              <a href="javascript:;">
                <img class="img img-responsive" :src="tmp.resource_url" />
              </a>
              <div style="background-color: #fff; padding: 10px;margin-bottom: 10px;" class="top">
                <div class="p">
                  <p style="font-size: 18px">
                    {{ tmp.detail }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 新闻资讯 -->
      <div class="col-xs-12 padding-xs location-news">
        <div class="newsmain">
          <div class="newstitle">
            <h4>新闻资讯</h4>
            <p></p>
          </div>
          <div class="modileTitle"><h5>新闻资讯</h5></div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="newsmain">
          <ul>
            <li v-for="tmp in news" :key="tmp.id" class="one">
              <a href="javascript:;">
                <img class="img img-responsive" :src="tmp.resource_url" />
              </a>
              <div style="background-color: #fff; padding: 10px;margin-bottom: 10px;" class="top">
                <div class="p">
                  <p style="font-size: 18px">
                    {{ tmp.detail }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="col-xs-12 padding-xs">
        <div class="newsmain">
          <div class="newstitle">
            <h4>合作伙伴</h4>
            <p></p>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="newsmain">
          <div class="col-xs-12 pur-tools">
            <a
              v-for="tmp in partner"
              :key="tmp.id"
              href="javascript:;"
              class="text-dark"
            >
              <div class="col-xs-6 col-lg-3 text-center">
                <i class="fa fa-3x">
                  <img :src="tmp.resource_url" style="margin: 0 auto" />
                </i>
                <h4 class="text-center">
                  <b>{{ tmp.detail }}</b>
                </h4>
                <hr />
                <h5 class="text-center"></h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Product v-if="active === 'product'" @onDetails="onDetails" />
    <Details :good="good" v-if="active === 'details'" @onDetails="onLocation" />
    <Contact v-if="active === 'contact'" />
    <!-- footer -->
    <Footer />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from './api'
import Product from './components/product.vue'
import Details from './components/details.vue'
import Contact from './components/contact.vue'
import Footer from './components/footer.vue'

const active = ref('main')
const banner = ref([])
const video = ref({})
const partner = ref([])
const news = ref([])
const intro = ref([])
const good = ref({})

function onChangeRoute(route) {
  active.value = route
}

function onLocationNews() {
  document.getElementsByClassName('location-news')[0].scrollIntoView()
}

function onDetails(g) {
  good.value = g
  active.value = 'details'
}

function onLocation() {
  good.value = {}
  active.value = 'main'
}

function onInitData() {
  axios.post('/xkgw/qt/getInformationBybutton', { key: 1 }).then((res) => {
    if (res.retCode === 0) {
      banner.value = res.data.topImages
      partner.value = res.data.topLogos
      video.value = res.data.topVideos[0] || {}
    }
  })
  axios.post('/xkgw/qt/getInformationBybutton', { key: 2 }).then((res) => {
    if (res.retCode === 0) {
      news.value = res.data.news
    }
  })
  axios.post('/xkgw/qt/getInformationBybutton', { key: 6 }).then((res) => {
    if (res.retCode === 0) {
      intro.value = res.data.intro
    }
  })
}

onMounted(() => {
  onInitData()
})
</script>
<style>
.grey-bg {
  background-color: #f2f2f2;
}
</style>
