<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxCardView, { DxColumn, DxPaging, DxPager, DxSelection, DxHeaderFilter, DxSearchPanel, DxColumnChooser, DxPosition } from 'devextreme-vue/card-view';
import { employees } from './data.ts';
</script>
<template>
  <DxCardView
    :data-source="employees"
    :width="1000"
    key-expr="ID"
    :allow-column-reordering="true"
    cards-per-row="auto"
    :card-min-width="200"
  >
    <DxPaging :page-size="3" />
    <DxPager
      :show-info="true"
      :show-navigation-buttons="true"
      :show-page-size-selector="true"
    />
    <DxSelection mode="multiple" />
    <DxHeaderFilter :visible="true" />
    <DxSearchPanel :visible="true" />
    <DxColumnChooser
      :enabled="true"
      :height="340"
      mode="select"
    >
      <DxPosition
        my="right top"
        at="right bottom"
        of=".dx-cardview-column-chooser-button"
      />
      <DxSelection :select-by-click="true" />
    </DxColumnChooser>
    <DxColumn data-field="FullName" :allow-hiding="false" />
    <DxColumn data-field="Position" />
    <DxColumn data-field="Email" />
  </DxCardView>
</template>
