<template>
  <v-sheet v-ripple class="ctn" :elevation="4" :height="170" :width="140" border rounded color="secondary">
    <Line />
    <div>
    </div>
    <div class="card-title">
      {{ product.name }}
    </div>
    <div class="center-ctn">
      <img v-if="product.imageCode != undefined" width="80%" :src="product.imageCode" />
      <p v-else>
        {{ product.description }}
      </p>
    </div>
    <div v-if="product.price !== undefined" class="price">
      <span v-if="warning !== 0">
        <v-icon size="small" :color="getWarningColor(warning)">
          mdi-exclamation-thick
        </v-icon>
      </span>
      <span class="spacer"></span>
      {{ product.price }}
    </div>
  </v-sheet>
</template>
<script lang="ts" setup>
import { CardProp } from '@/types/CardProps';

defineProps({
  product: {
    type: CardProp,
    required: true
  },
  warning: {
    type: Number,
    default: 0,
  }
})

const getWarningColor = (lvl: number) => {
  if (lvl < 16) {
    return "success"
  }
  else if (lvl >= 16 && lvl < 18) {
    return "warning"
  }
  else {
    return "error"
  }
}

</script>
<style lang="css" scoped>
.card-title {
  max-height: 30%;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: medium;
}

img {
  margin: auto;
}

.center-ctn {
  display: flex;
  justify-content: center;
  max-height: 50%;
}

.price {
  font-weight: 700;
  font-size: x-large;
  text-align: end;
  padding-right: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
}

p {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow-y: hidden;
  font-size: small;
}

.ctn {
  position: relative;
  overflow: hidden;
}
</style>
