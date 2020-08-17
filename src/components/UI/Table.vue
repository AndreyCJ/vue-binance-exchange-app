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
            <td class="table__amount">
              <span>
                {{ parseFloat(el[1]).toFixed(2) }}
              </span>
            </td>
            <td class="table__price">
              <span>
                {{ parseFloat(el[0]).toFixed(7) }}
              </span>
            </td>
            <td class="table__total">
              <span>
                {{ (parseFloat(el[1]) * parseFloat(el[0])).toFixed(7) }}
              </span>
            </td>
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
    type: Array,
  },
};
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
    :hover::-webkit-scrollbar-thumb {
      background-color: $dark-bold;
    }

    table-layout: fixed;
    width: 100%;
    border-spacing: 0;
    thead {
      display: table;
      overflow: auto;
      width: 100%;
      box-shadow: 0 4px 2px -2px #dddddd;
    }
    tbody {
      display: block;
      height: calc(100vh - (98px + 82px));
      width: 100%;
      overflow-y: scroll;
      border: none;
      scrollbar-color: transparent transparent;
      scrollbar-width: thin;
    }
    tbody:hover {
      scrollbar-color: auto;  
    }
    tbody tr:nth-child(2n) {
      background-color: rgba(130, 130, 170, 0.1);
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
    th,
    td {
      padding: 1em;
      text-align: left;
    }

    thead th {
      display: inline-block;
      width: 33.33% !important;
      background: #e8e8ec;
    }
  }
}

@media screen and (max-width: 895px) {
  .table {
    &__fixed {
      max-width: 75vw;
      tbody td {
        width: 100%;
      }
    }
    &__total {
      display: none !important;
    }
    thead th {
      width: 50% !important;
    }
  }
}
</style>
