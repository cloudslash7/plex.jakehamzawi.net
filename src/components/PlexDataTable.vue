<template>
    <div class=container>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Language</th>
                <th>Type</th>
                <th>Subtitles</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody v-for='media in plexDataList' :key='media.title'>
                <tr>
                    <td>{{ media.title }}</td>
                    <td>{{ media.language }}</td>
                    <td>{{ media.type }}</td>
                    <td>{{ media.subs }}</td>
                    <td>{{ media.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import plexData from '@/assets/plexdata.json';
export default {
    name: 'PlexDataTable',
    computed: {
        plexDataList() {
            return plexData;
        },
    },

}
</script>

<style scoped>
    table {
        text-align: center;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    td {
        padding: 4px 15px;
    }
    tbody:nth-child(odd) {
        background: #722b2b;
    }
    tbody:nth-child(even) {
        background: #2b4a72;
    }
</style>