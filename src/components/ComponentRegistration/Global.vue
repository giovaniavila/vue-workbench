<template>
  <div id="app">
    <h1>My items list</h1>
    <input
      v-model="newItem"
      @keyup.enter="addItem"
      placeholder="add an item"
    />
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      items: [],
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem);
        this.newItem = ""; 
      }
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
}

input {
  padding: 8px;
  margin: 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 8px;
  border-radius: 4px;
}
</style>
