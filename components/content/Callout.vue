<script setup>
defineProps(['title'])
</script>
<template>
    <div>
        {{ title }}
        <div>Callout</div>
        <div>
            <slot name="default"></slot>
            <slot name="test"></slot>
            <slot name="test2"></slot>
        </div>
        
    </div>
</template>