<script>
    import buggy from "$lib/images/weeee.gif"
    import { page } from '$app/stores';
</script>

<title>{$page.status}</title>
<h1>{$page.status}</h1>

<p>{$page.error.message}!</p>
<img src={buggy} alt="weeee!">

<style>
    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        text-align: center;
    }

    p {
        text-align: center;
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>