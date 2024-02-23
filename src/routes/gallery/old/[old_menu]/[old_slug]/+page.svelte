<script>
	export let data;
</script>

<div>
    <img src="../../../src/lib/images/old/{data.pic.img}" alt={data.pic.alt}>
</div>

<style>
    div {
        margin: auto;
        max-width: 700px;
        justify-content: center;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>