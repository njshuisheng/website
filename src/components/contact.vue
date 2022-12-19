<template>
  <div id="MessageMoban">
    <div class="update_message2">
      <dl>
        <dt>
          <img src="/images/message_tel.jpg" />
          <div class="pub-shadow"></div>
          <div class="update_message2_desc">
            <span>客服专线</span>
            <strong>
              <a>{{ contact.v2 }}</a>
            </strong>
          </div>
        </dt>
      </dl>
      <div style="width: 100%; margin: 0 auto; display: flex; justify-content:center;flex-wrap: wrap;">
        <div class="col-lg-4">
          <img :src="contact.v3" alt="" />
        </div>
        <div class="col-lg-4">
          <img :src="contact.v4" alt="" />
        </div>
      </div>
    </div>
    <div class="update_message2">
      <dl>
        <dt>
          <img src="/images/message_tel.jpg" />
          <div class="pub-shadow"></div>
          <div class="update_message2_desc">
            <span>售后专线</span>
            <strong>
              <a>400-6633-365</a>
            </strong>
          </div>
        </dt>
      </dl>
      <div style="width: 100%; margin: 0 auto; display: flex; justify-content:center;flex-wrap: wrap;">
        <div class="col-lg-4" style="margin-bottom: 20px;">
          <img :src="contact.v5" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from '../api'
import { onMounted, reactive, ref } from 'vue'
const contact = reactive({
  v1: '',
  v2: '',
  v3: '',
  v4: '',
  v5: ''
})

function onInitData() {
  axios.post('/xkgw/qt/getInformationBybutton', { key: 5 }).then((res) => {
    if (res.retCode === 0) {
      contact.value = res.data.intro
      for(let i = 0; i < res.data.intro.length; i++) {
        const data = res.data.intro[i]
        switch(data.type) {
          case '1':
            contact.v1 = data.url
            break
            case '2':
            contact.v2 = data.url
            break
            case '3':
            contact.v3 = data.url
            break
            case '4':
            contact.v4 = data.url
            break
            case '5':
            contact.v5 = data.url
            break
        }
      }
    }
  })
}

onMounted(() => {
  onInitData()
})
</script>