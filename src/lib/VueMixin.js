import Vue from 'vue'

//全局vue变量
Vue.mixin({
  // computed: {
  //   http_header() {
  //     return {
  //       'Accept': 'application/json',
  //       'x-version-code': '1.1',
  //       'x-company-code': this.$store.state.company_code,
  //     }
  //   }
  // },
  methods: {
    goRoute(name) {
      this.$router.push({
        name: name
      });
    },
    formatTimestamp(_timestamp) {
      let _chuo = _timestamp.toString();
      let len = _chuo.length;
      while (len < 13) {
        _chuo = _chuo + '0';
        len++;
      }
      //      let normal_date;
      let times = new Date(Number(_chuo));
      let time_y = times.getFullYear();
      let time_M = (times.getMonth() + 1 < 10 ? '0' + (times.getMonth() + 1) : times.getMonth() + 1);
      let time_d = (times.getDate() < 10 ? '0' + times.getDate() : times.getDate());
      let time_min = (times.getMinutes() < 10 ? '0' + times.getMinutes() : times.getMinutes());
      let time_h = (times.getHours() < 10 ? '0' + times.getHours() : times.getHours());
      //      normal_date = time_y + "-" + time_M + "-" + time_d;
      let normal_date = {
        "year": time_y,
        "month": time_M,
        "date": time_d,
        "hour": time_h,
        "min": time_min,
      };
      // console.log(normal_date)
      return normal_date;
    },
    getParament(name, symbol, string) {
      let reg = new RegExp(name + symbol + "([^&]*)(&|$)", "i");
      //    let r = window.location.href.match(reg);
      let r = string.match(reg);
      if (r !== null) return r[1];
      return null;
    }
  },
})