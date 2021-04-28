new Vue({
  // 先綁訂到DOM身上
  el: "#vue-app",
  data: {
    name: "金金",
    age: 18,
    search: "https://www.google.com/",
    placeholder: "請輸入姓名",
    websiteHTML: '<a href="https://www.google.com/">The Link</a>',
    x: 0,
    y: 0,
  },
  //   function
  methods: {
    greeting: function (time) {
      return "Good " + time + " " + this.name;
    },
    addingAge: function (num) {
      return (this.age += num);
    },
    substrackAge: function (num) {
      return (this.age -= num);
    },
    updateXY: function (event) {
      //   console.log(event); 呈現window的滑鼠事件
      //   設定X跟y坐標會等於滑到哪處的offset座標
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
