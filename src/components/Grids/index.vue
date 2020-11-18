<template>
  <div class="gridBox">
      <Grid :column-num="3">
          <GridItem icon="photo-o" text="文字" ></GridItem>
          <GridItem icon="photo-o" text="文字" ></GridItem>
          <GridItem icon="photo-o" text="文字" ></GridItem>
          <GridItem icon="photo-o" text="文字" ></GridItem>
          <GridItem icon="photo-o" text="文字" ></GridItem>
          <GridItem icon="photo-o" text="文字" ></GridItem>
      </Grid>
  </div>
</template>

<script>
import {Grid, GridItem} from 'vant'
export default {
    components: {Grid, GridItem}
}
</script>

<style>

</style>