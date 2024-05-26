<script>
	export let data;
</script>

<title>{data.post.title}</title>
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

<style>
    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
    }

    div {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>