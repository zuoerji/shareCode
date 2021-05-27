<template>
    <div class="box" @mousemove="move">
        <input type="text" ref="text">
        <button @click="submit">确定</button>
        <ul>
            <li 
                class="move" 
                v-for="(item,index) in list" 
                :key="index"
                :style="{left:item.left+'px',top:item.top+'px'}"
                >{{item.value}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    submit() {
      console.log("submit");
      let list = this.$refs.text.value.split("");
      list.forEach(item => {
        this.list.push({
          top: 20,
          left: 20,
          value: item
        });
      });
    },
    move(e) {
      let mouseX = e.pageX || e.clientX + document.documentElement.scrollLeft;
      let mouseY = e.pageY || e.clientY + document.documentElement.scrollTop;
      if (this.list[0]) {
        this.list[0].top = mouseY;
        this.list[0].left = mouseX;
      }
      for (let i = this.list.length - 1; i >= 1; i--) {
        this.list[i].top = this.list[i - 1].top;
        this.list[i].left = this.list[i - 1].left + 20;
      }
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
}
.move {
  position: absolute;
}
</style>

