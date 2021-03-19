<template>
  <div>
      <h1>What's on the server?</h1>
      <PlexDataTable></PlexDataTable>
  </div>
</template>

<script>
import PlexDataTable from '@/components/PlexDataTable.vue'
export default {
  name: 'Database',
  components: {
      PlexDataTable,
  }
}
</script>