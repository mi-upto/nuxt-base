import Vue from 'vue'

// コンポーネントの描画関数とウォッチャにおいて未捕獲のエラーに対してハンドラを割り当て
// https://jp.vuejs.org/v2/api/#errorHandler
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err)
}

// Vue 実行時の警告に対してカスタムハンドラを割り当て
// https://jp.vuejs.org/v2/api/#warnHandler
Vue.config.warnHandler = function (msg, vm, trace) {}
