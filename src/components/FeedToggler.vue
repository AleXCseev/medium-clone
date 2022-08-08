<template>
    <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="isLoggedIn">
                <router-link :to="{name: 'feed'}" class="nav-link" :class="{active: routeName === 'feed'}">Your feed</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'globalfeed'}" class="nav-link" :class="{active: routeName === 'globalfeed'}">Global feed</router-link>
            </li>
            <li class="nav-item" v-if="tagName">
                <router-link :to="{name: 'tag'}" class="nav-link" :class="{active: routeName === 'tag'}">
                    <i class="ion-pound"/>
                    {{tagName}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { getterTypes } from '@/store/modules/auth'
import { mapGetters } from 'vuex'

export default {
    name: "AppFeedToggler",
    props: {
        tagName: {
            type: String,
            required: false,
        }
    },
    computed: {
        ...mapGetters({
            isLoggedIn: getterTypes.isLoggedIn
        }),
        routeName() {
            return this.$route.name
        }
    }
}
</script>
