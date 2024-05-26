<script>
    export let title;
    export let href;
    export let src;
    export let alt;
    export let text;
</script>

<div>
    <img {src} {alt}>
    <a {href}>{title}</a>
</div>
<p>{text}</p>

<style>
    div {
        max-width: 300px;
        margin: auto;
    }

    img {
        max-height: 100px;
        display: inline;
    }

    a {
        font-family: "ACNH";
        font-size: 30px;
        text-align: center;
        display: inline;
        float: right;
        color: #403d3d;
        margin-top: 25px;
    }

    p {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
        text-align: center;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>