<template>
    <button class="btn btn-danger" @click="count++">
        Count is: {{ count }}
    </button>
</template>
<script>
export default {
    data() {
        return {
            count: 1
        }
    }
}
</script>