<script setup>
const blogs = ref();
onMounted(() => {
  fetch('/api/blogs')
    .then((res) => res.json())
    .then((json) => {
      blogs.value = json.blogs;
    });
});
</script>

<template>
  <div>Page visits:</div>
  <div
    v-for="item in blogs"
    :key="item.id"
  >
    <div>Author: {{ item.author }}</div>
    <div>CreateTime: {{ item.createTime }}</div>
    <div>Title: {{ item.title }}</div>
    <div>Summary: {{ item.summary }}</div>
    <div>Tags: {{ item.tags }}</div>
    <div>Star: {{ item.star }}</div>
    <br>
  </div>
</template>
