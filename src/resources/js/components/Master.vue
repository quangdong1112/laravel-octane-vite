<script setup>
import Header from "./Header.vue";
</script>
<template>
    <div class="wrapper d-flex flex-column">
        <Header></Header>
        <div class="flex-grow-1 relative">
            <div class="wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>