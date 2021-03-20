<template>
    <div class='main-container'>
        <div class='container'>
            <div class='sort' :class='{active: !sortByAlpha}' @click='sortByAlpha = false'>Order Added</div>
            <div class='sort' :class='{active: sortByAlpha}' @click='sortByAlpha = true'>A-Z</div>
        </div>
        <div class='conatiner'>
            <table v-if='sortByAlpha'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Language</th>
                    <th>Type</th>
                    <th>Subtitles</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody v-for='media in sortedMedia' :key='media.title'>
                    <tr>
                        <td>{{ media.title }}</td>
                        <td>{{ media.language }}</td>
                        <td>{{ media.type }}</td>
                        <td>{{ media.subs }}</td>
                        <td>{{ media.status }}</td>
                    </tr>
                </tbody>
            </table>
            <table v-else>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Language</th>
                    <th>Type</th>
                    <th>Subtitles</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody v-for='media in this.$root.$data.media' :key='media.title'>
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
    </div>
</template>

<script>
export default {
    name: 'PlexDataTable',
    data() {
		return {
			sortByAlpha: false
		}
	},
    computed: {
        sortedMedia() {
            let sorted = [].concat(this.$root.$data.media)
            sorted.sort(function (a, b) {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            })
            return sorted;
        }
    },
}
</script>

<style scoped>
    .main-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .container {
        display: flex;
        flex-flow: wrap;
        justify-content: flex-end;
        align-items: center;
        width: 60%;
    }
    .sort {
        background: none;
        border: none;
        margin: 10px;
        cursor: pointer;
    }
    .active {
        color: #c24e4e;
    }
    table {
        text-align: center;
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