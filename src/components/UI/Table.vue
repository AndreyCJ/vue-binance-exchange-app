<template>
  <div class="table">
    <div class="table__container">
      <table class="table__fixed">
        <thead class="table__header">
          <tr>
            <th class="table__amount"><span>Amount</span></th>
            <th class="table__price"><span>Price</span></th>
            <th class="table__total"><span>Total</span></th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(el, i) in type" :key="i">
            <td class="table__amount"><span>{{ Math.floor(el[1]) }}</span></td>
            <td class="table__price"><span>{{ el[0] }}</span></td>
            <td class="table__total"><span>{{ Math.floor(el[1]) * el[0] }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    type: Array
  }
}
</script>

<style lang="scss" scoped>

.table {
  &__container {
    width: 100%;
    max-width: 700px;
    margin: 2em 0 auto auto;
  }
  &__fixed {
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
      transition: background-color 1s;
    }
    table-layout: fixed;
    width: 100%;
    border-spacing: 0;
    :hover::-webkit-scrollbar-thumb{
      background-color: $light;
    }
    thead {
      display: table;
      overflow: auto;
      width: 100%
    }
    tbody{
      display: block;
      height: calc(100vh - (98px + 82px));
      overflow: auto;
      width: 100%;
      border-top: 1px solid rgba(0,0,0,0.2);
    }
    tbody tr:nth-child(2n){
      background-color: rgba(130,130,170,0.1);
    }
    tbody tr { 
      width: 100%;
      display: flex;
    }
    tbody td {
      word-break: break-word;
      overflow-wrap: break-word;
      width: 100% !important;
    }
    th, td {
      padding: 1em;
      text-align:left;
    }

    thead th {
      // padding: 1em 0;
      display: inline-block;
      width: 33.33% !important;
      background: $dark-light;
    }
  }
}

@media screen and (max-width: 895px) {
 .table__fixed {
   tbody td {
     width: 100%;
   }
 }
}

</style>