<template>
    <app-article-form
        :initial-values="initialValues" 
        :errors="validationErrors" 
        :is-submitting="isSubmitting" 
        @articleSubmit="onSubmit"
    />
</template>

<script>
import AppArticleForm from "@/components/ArticleForm.vue"
import { actionTypes } from "@/store/modules/createArticle"
import { mapState } from "vuex"

export default {
    name: "AppCreateArticle",
    components: {
        AppArticleForm,
    },
    data() {
        return {
            initialValues: {
                title: '',
                description: '',
                body: '',
                tagList: [],
            },
        }
    },
    methods: {
        onSubmit(articleInput) {
            this.$store.dispatch(actionTypes.createArticle, {articleInput})
                .then(article => {
                    this.$router.push({name: "article", params: {slug: article.slug}})
                })
        }
    },
    computed: {
        ...mapState({
            isSubmitting: state => state.createArticle.isSubmitting,
            validationErrors: state => state.createArticle.validationErrors
        })
    }
}
</script>
