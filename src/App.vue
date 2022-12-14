<template>
  <div :class="{'grey-bg': active === 'main'}">
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
                <a href="javascript:;" @click="onChangeRoute('main')">
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
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img
            src="/upload/img/1.jpg"
            class="first-slide img img-responsive hidden-xs"
          />
          <a class="hidden-lg hidden-sm hidden-md" href="">
            <img
              src="/upload/img/1.jpg"
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
        <div class="item">
          <img
            src="/upload/img/2.jpg"
            class="first-slide img img-responsive hidden-xs"
          />
          <a class="hidden-lg hidden-sm hidden-md" href="">
            <img
              src="/upload/img/2.jpg"
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
        <div class="item">
          <img
            src="/upload/img/3.jpg"
            class="first-slide img img-responsive hidden-xs"
          />
          <a class="hidden-lg hidden-sm hidden-md" href="">
            <img
              src="/upload/img/3.jpg"
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
        <div class="item">
          <img
            src="/upload/img/4.jpg"
            class="first-slide img img-responsive hidden-xs"
          />
          <a class="hidden-lg hidden-sm hidden-md" href="">
            <img
              src="/upload/img/4.jpg"
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
          <source src="movie.mov" />
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
        </div>
      </div>
      <div class="col-xs-12">
        <div class="newsmain">
          <ul>
            <li class="one">
              <a href="/html/news/10/">
                <img
                  class="img img-responsive"
                  src="/upload/img/20210416115805.jpg"
                />
                <div class="news-title">
                  <h5>公司介绍</h5>
                  <p></p>
                  <i class="fa fa-chevron-circle-right fa-2x"></i>
                </div>
              </a>
            </li>
            <li class="two">
              <img class="img img-responsive" src="/upload/default.jpg" />
              <a href="/html/news/d/43.html">
                <div class="top">
                  <h5>贝蒂克莱泊钢琴—钢琴家系列</h5>
                  <div class="p">
                    <p>
                      本网2月5日讯
                      又一个世界级的钢琴品牌进入中国市场，贝蒂克莱泊钢琴遵循着欧洲制琴工艺，将在中国市场绽放放他的光芒，也让更多钢琴爱好者感受到欧洲钢琴的魅力。下面我们来一起了解一下，这个英国钢琴品牌的历史和他的工艺。
                    </p>
                  </div>
                </div>
                <div class="bottom">
                  <h3>17</h3>
                  <span>2021.00</span>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
              <img class="img img-responsive" src="/upload/default.jpg" />
              <a href="/html/news/d/42.html">
                <div class="top">
                  <h5>百度百科-贝蒂克莱泊</h5>
                  <div class="p">
                    <p>
                      工艺配置 独立组装
                      击弦机部件由专家技师逐一手工检测，以确保部件安装零误差，使演奏家在弹奏曲目时通过击键反馈更好的演绎曲目。
                      乌木黑键 钢琴琴键采用乌木制造
                    </p>
                  </div>
                </div>
                <div class="bottom">
                  <h3>15</h3>
                  <span>2021.00</span>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
            </li>
            <li class="three">
              <a href="/html/news/d/41.html">
                <div class="left">
                  <h3>13</h3>
                  <span>2021.00</span>
                </div>
                <div class="right">
                  <h5>百年传承—贝蒂克莱泊钢琴</h5>
                  <div class="p">
                    <p>
                      来自英国具有百年历史的贝蒂克莱泊钢琴将于2017年进军中国市场，追求极致音色与品质的贝蒂克莱泊钢琴，根据客户的艺术诉求打造最适合客户的钢琴，追求每一道工艺，在艺术的创造以及艺术的极致追求上，都要求达到无以复加的地步。
                    </p>
                  </div>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
              <a href="/html/news/d/40.html">
                <div class="left">
                  <h3>12</h3>
                  <span>2021.00</span>
                </div>
                <div class="right">
                  <h5>世界十大名琴之贝蒂克莱泊 BAITY CRAIB</h5>
                  <div class="p">
                    <p>
                      又一个世界级的钢琴品牌进入中国市场，贝蒂克莱泊钢琴遵循着欧洲制琴工艺，将在中国市场绽放放他的光芒，也让更多钢琴爱好者感受到欧洲钢琴的魅力。下面我们来一起了解一下，这个英国钢琴品牌的历史和他的工艺。
                    </p>
                  </div>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 新闻资讯 -->
      <div class="col-xs-12 padding-xs">
        <div class="newsmain">
          <div class="newstitle">
            <h4>新闻资讯</h4>
            <p></p>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="newsmain">
          <ul>
            <li class="one">
              <a href="/html/news/10/">
                <img
                  class="img img-responsive"
                  src="/upload/img/20210416115805.jpg"
                />
                <div class="news-title">
                  <h5>新闻资讯</h5>
                  <p></p>
                  <i class="fa fa-chevron-circle-right fa-2x"></i>
                </div>
              </a>
            </li>
            <li class="two">
              <img class="img img-responsive" src="/upload/default.jpg" />
              <a href="/html/news/d/43.html">
                <div class="top">
                  <h5>贝蒂克莱泊钢琴—钢琴家系列</h5>
                  <div class="p">
                    <p>
                      本网2月5日讯
                      又一个世界级的钢琴品牌进入中国市场，贝蒂克莱泊钢琴遵循着欧洲制琴工艺，将在中国市场绽放放他的光芒，也让更多钢琴爱好者感受到欧洲钢琴的魅力。下面我们来一起了解一下，这个英国钢琴品牌的历史和他的工艺。
                    </p>
                  </div>
                </div>
                <div class="bottom">
                  <h3>17</h3>
                  <span>2021.00</span>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
              <img class="img img-responsive" src="/upload/default.jpg" />
              <a href="/html/news/d/42.html">
                <div class="top">
                  <h5>百度百科-贝蒂克莱泊</h5>
                  <div class="p">
                    <p>
                      工艺配置 独立组装
                      击弦机部件由专家技师逐一手工检测，以确保部件安装零误差，使演奏家在弹奏曲目时通过击键反馈更好的演绎曲目。
                      乌木黑键 钢琴琴键采用乌木制造
                    </p>
                  </div>
                </div>
                <div class="bottom">
                  <h3>15</h3>
                  <span>2021.00</span>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
            </li>
            <li class="three">
              <a href="/html/news/d/41.html">
                <div class="left">
                  <h3>13</h3>
                  <span>2021.00</span>
                </div>
                <div class="right">
                  <h5>百年传承—贝蒂克莱泊钢琴</h5>
                  <div class="p">
                    <p>
                      来自英国具有百年历史的贝蒂克莱泊钢琴将于2017年进军中国市场，追求极致音色与品质的贝蒂克莱泊钢琴，根据客户的艺术诉求打造最适合客户的钢琴，追求每一道工艺，在艺术的创造以及艺术的极致追求上，都要求达到无以复加的地步。
                    </p>
                  </div>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
              <a href="/html/news/d/40.html">
                <div class="left">
                  <h3>12</h3>
                  <span>2021.00</span>
                </div>
                <div class="right">
                  <h5>世界十大名琴之贝蒂克莱泊 BAITY CRAIB</h5>
                  <div class="p">
                    <p>
                      又一个世界级的钢琴品牌进入中国市场，贝蒂克莱泊钢琴遵循着欧洲制琴工艺，将在中国市场绽放放他的光芒，也让更多钢琴爱好者感受到欧洲钢琴的魅力。下面我们来一起了解一下，这个英国钢琴品牌的历史和他的工艺。
                    </p>
                  </div>
                  <i class="fa fa-chevron-circle-right"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
            <a href="/html/about/2/" class="text-dark">
              <div class="col-xs-6 col-lg-3 text-center">
                <i class="fa fa-3x">
                  <img
                    src="/upload/20210127165741.png"
                    style="margin: 0 auto"
                  />
                </i>
                <h4 class="text-center">
                  <b>品牌故事</b>
                </h4>
                <hr />
                <h5 class="text-center"></h5>
              </div>
            </a>
            <a href="/html/about/27/" class="text-dark">
              <div class="col-xs-6 col-lg-3 text-center">
                <i class="fa fa-3x">
                  <img
                    src="/upload/20210127165816.png"
                    style="margin: 0 auto"
                  />
                </i>
                <h4 class="text-center">
                  <b>创始人</b>
                </h4>
                <hr />
                <h5 class="text-center"></h5>
              </div>
            </a>
            <a href="/html/product/1/" class="text-dark">
              <div class="col-xs-6 col-lg-3 text-center">
                <i class="fa fa-3x">
                  <img
                    src="/upload/20210127165822.png"
                    style="margin: 0 auto"
                  />
                </i>
                <h4 class="text-center">
                  <b>三角钢琴</b>
                </h4>
                <hr />
                <h5 class="text-center"></h5>
              </div>
            </a>
            <a href="/html/product/5/" class="text-dark">
              <div class="col-xs-6 col-lg-3 text-center">
                <i class="fa fa-3x">
                  <img
                    src="/upload/20210128102130.png"
                    style="margin: 0 auto"
                  />
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
      </div>
    </div>
    <Product 
        v-if="active === 'product'"
        @onDetails="onDetails"
    />
    <Details
        v-if="active === 'details'"
    />
    <Contact
        v-if="active === 'contact'"
    />
    <!-- footer -->
    <div
      id="footerDiv"
      style="
        background: url('/upload/img/20210127134104.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <section
        id="footer"
        class="container dark group"
        style="background: none"
      >
        <div class="row" style="padding-top: 31px">
          <div class="column column_container col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="row inner row-fluid">
                  <div
                    class="column column_container col-lg-12 col-sm-12 center-block"
                  >
                    <div class="column-inner">
                      <div class="wrapper">
                        <div class="wpb_text_column wpb_content_element">
                          <div class="" style="text-align: center">
                            <h3>
                              <img
                                src="/images/white_logo.png"
                                style="width: 186px"
                              />
                            </h3>
                            <ul
                              style="
                                list-style: none;
                                width: 286px;
                                display: inline-block;
                                padding-left: 0;
                              "
                            >
                              <li style="line-height: 24px">
                                <span style="font-size: 12pt; color: #c5c5c5"
                                  >官方热线: 400-6633-365</span
                                >
                              </li>
                              <li style="line-height: 24px">
                                <span style="font-size: 12pt; color: #c5c5c5"
                                  >客服邮件: 3202794009@qq.com</span
                                >
                              </li>
                              <li style="line-height: 24px">
                                <span style="font-size: 12pt; color: #c5c5c5"
                                  >地 址: 南京市建邺区君泰国际A栋706</span
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id=""
                  class="container"
                  style="width: 100%; min-height: 65px"
                >
                  <div class="row">
                    <div id="beian" style="text-align: center">
                      <p
                        style="
                          color: #c5c5c5;
                          font-size: 14px;
                          margin-bottom: 0px;
                        "
                      >
                        <span style="font-family: Arial, Helvetica, sans-serif">
                          Copyright &nbsp;&nbsp;&copy;&nbsp;&nbsp;2021-
                          {{ new Date().getFullYear() }}
                        </span>
                        &nbsp;南京市建邺区君泰国际A栋706 All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div
                    id="wxQrcodeMobile"
                    style="width: 100%; text-align: center; display: none"
                  >
                    <img
                      src="/upload/img/20210908103719.png"
                      id="qrcode"
                      style="width: 150px"
                    />
                  </div>
                  <div
                    id="beian"
                    class="text-left col-md-6 hidden-lg hidden-md hidden-sm"
                    style="padding-left: 60px"
                  >
                    <p
                      style="
                        color: #c5c5c5;
                        font-size: 12px;
                        margin-bottom: 0px;
                      "
                    >
                      Copyright &nbsp;&nbsp;&copy;&nbsp;&nbsp;2021-
                      {{ new Date().getFullYear() }}
                      &nbsp;英国希斯曼乐器国际集团有限公司All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Product from './components/product.vue'
import Details from './components/details.vue'
import Contact from './components/contact.vue'

const active = ref('main')

function onChangeRoute(route) {
  active.value = route
}

function onDetails() {
    active.value = 'details'
}
</script>
<style>
.grey-bg {
  background-color: #f2f2f2;
}
</style>