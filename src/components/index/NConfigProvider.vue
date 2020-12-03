<template>
  <a-config-provider v-bind="attrs">
    <slot />
  </a-config-provider>
</template>

<script>
import _ from 'lodash-es';
import 'moment/locale/ja';
import 'moment/locale/zh-cn';
import 'moment/locale/es-us';
import moment from 'moment';
import store from '@/store';
import i18n from '@/locale/i18n';
import en from 'ant-design-vue/es/locale/en_US';
import ja from 'ant-design-vue/es/locale/ja_JP';
import zh from 'ant-design-vue/es/locale/zh_CN';

// make 'Ok' to 'OK'. (PS: Plan B: css text-transform:uppercase)
const myEn = {
  Calendar: { lang: { ok: 'OK', timeSelect: 'Select Time', dateSelect: 'Select Date' } },
  DatePicker: { lang: { ok: 'OK', timeSelect: 'Select Time', dateSelect: 'Select Date' } },
};

_.merge(en, myEn);

const LANG = { en, ja, zh };

export default {
  name: 'NConfigProvider',

  computed: {
    attrs() {
      return {
        locale: LANG['en'],
        getPopupContainer: node => node?.parentNode ?? document.body,
      };
    },
  },
};
</script>
