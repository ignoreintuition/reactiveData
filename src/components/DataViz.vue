<template>
  <div id="content">
    <H1> Reactive Data with Vue </H1>
    <div>
        <ul>
          <li v-for="(a, index) in arr">
          {{a.val}}
          </li>
        </ul>
    </div>

    <div class="component">
      <form>
        <div v-for="a in arr">
          <input v-model="a.val"/>
        </div>
      </form>
    </div>

    <div class="component">
      <svg class="chart">
        <rect v-for="(a, index) in arr" class="bar"
          height  = "20"
          x       = "0"
          :width  = "a.val * 2"
          :y      = "index * 22" />
      </svg>
    </div>
  </div>
</template>

<script src="./main.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.chart {
}

.bar {
  color: 'black';
}

.component {
  float: left;
  width: 50%;
}

#content {
  margin: 0% 25% 0% 25%;
}
</style>
