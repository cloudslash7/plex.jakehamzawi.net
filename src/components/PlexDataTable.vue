<template>
<div class='main-container'>
    <div class='container'>
        <div class='sort'>Sort:</div>
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
                    <td :class='{requested: media.status === "REQUESTED"}'>{{ media.status }}</td>
                    <td v-if='media.revokeable' class='revokeButton'><img id='trash' src='@/assets/trash.png' @click='revokeTicket(media.id)'></td>
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
    methods: {
        revokeTicket(id) {
            this.$root.$data.media.splice(id, 1)
        }
    }
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
    justify-content: center;
    align-items: center;
    margin: 10px;
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
th {
    font-size: 20px;
    padding: 10px;
}
td {
    padding: 4px 15px;
}
tbody:nth-child(odd) {
    background-color: #722b2b;
}
tbody:nth-child(even) {
    background-color: #474747;
}
.requested {
    background-color: green;
}
.revokeButton {
    background-color: #1f1f1f;
}
#trash {
    width: 20px;
    cursor: pointer;
}
</style>