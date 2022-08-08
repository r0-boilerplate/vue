<template>
  <div class="logo-bar">
    <div class="item" v-for="(item, index) in logo_list" :key="index">
      <div class="icon-box">
        <img class="logo" :src="item.img"/>
        <div class="title">{{item.title}}</div>
      </div>
      <img class="plus" src="../../assets/icons/plus.svg" v-if="index != logo_list.length - 1"/>
    </div>
  </div>
</template>

<script src="./LogoBar.js"></script>
<style lang="scss" src="./LogoBar.scss"></style>
