<template>

    <Modal v-model="this.$store.state.deleteModal" :mask-closable="false" width="360">
        <template #header>
            <p style="color:#f60;text-align:center">
                <Icon type="ios-information-circle" size="21" class="me-2"></Icon>
                <span>Delete confirmation</span>
            </p>
        </template>
        <div style="text-align:center">
            <p class="text-dark fw-bold">Are you want to delete this Address ?</p>
            <p>Press delete to confirm.</p>
        </div>
        <template #footer>
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </template>
    </Modal>

</template>

<script>
export default {

}
</script>

<style>

</style>