<script>
    export let title;
    export let href;
    export let src;
    export let alt;
    export let text;
</script>

<div class = "block">
    <div class = "logo">
        <img {src} {alt}>
        <a {href}>{title}</a>
    </div>
    <div class = "textbox">
        <p>{text}</p>
    </div>
</div>

<style>
    .block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 500px;
        margin: auto;
    }

    img {
        max-width: 200px;
    }

    .logo {
        max-width: 200px;
    }

    a {
        text-align: center;
        font-family: "ACNH";
        margin-top: 10px;
        font-size: 24px;
        line-height: 26px;
        color: #403d3d;
        float: right;
    }

    .textbox {
        width: 280px;
        margin-left: 20px;
    }

    p {
        text-align: right;
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>