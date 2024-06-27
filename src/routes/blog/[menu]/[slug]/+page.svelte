<script>
	export let data;
</script>

<title>{data.post.title}</title>
<h1>{data.post.title}</h1>
<p>{data.post.date}, published by Evan Buggy</p><hr>
<div>{@html data.post.content}</div>

<style>
    h1 {
        font-size: 40px;
        text-align: center;
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        margin-bottom: 0px;
    }

    hr {
        width: 70%;
    }

    p {
        font-size: 12px;
        text-align: center;
        font-family: "ACNH";
        color: #403d3d;
        margin-bottom: 30px;
    }

    div {
        margin-top: 30px;
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>