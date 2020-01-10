<template>
    <div>
        <h4>ocx测试</h4>
        <button @click="read"></button>
        <object classid="clsid:81c29cd3-3bb3-4a9f-9c82-1deb159acf81" id="Tc"
        style="display: none;" width="0" height="0" align="center"/>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$certID = document.getElementById('Tc');
    },
    methods: {
        read() {
            alert(this.$certID.IDCardGetMessage());
        },
    },
};
</script>
