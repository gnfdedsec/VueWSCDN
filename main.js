const app = new Vue({
    el: "#app", //มีคอมม่า
    data: {
      name:"Mr.Green Supon", //มีคอมม่า เหมือน JSON
      job:"คนส่งแก๊ส",//มีคอมม่า
      age:150,//มีคอมม่า
      status :false
    },//มีคอมม่า
    methods: {
        getName:function(){
         return this.name
        }, //มีคอมม่า
        setName :function(n){
            return this.name =n
        }
    }
  });