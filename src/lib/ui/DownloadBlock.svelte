<script>
    export let title;
    export let link;
    export let src;
    export let alt;
    export let text;
    async function download() {
        let res = await fetch(link, {
            method: 'GET',
        });
        
        let blob = await res.blob();
        var url = window.URL || window.webkitURL;
        let l = url.createObjectURL(blob);

        let a = document.createElement("a");
        a.setAttribute("download", title);
        a.setAttribute("href", l);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
</script>

<div class = "block">
    <div class = "logo">
        <img {src} {alt}>
        <button on:click={download}>{title}</button>
    </div>
    <div class = "textbox">
        <p>{text}</p>
    </div>
</div>

<style>
    button {
        margin-top: 12px;
        max-width: 200px;
        font-family: "ACNH";
        margin-right: auto;
        float: right;
        display: inline;
        overflow-wrap: break-word;
        background-color: #b6a47e;
        border-radius: 20px;
        border: none;
        color: white;
        line-height: 15px;
        padding: 5px 10px;
        text-align: center;
        font-size: 10px;
        transition: 0.2s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    button:hover {
        cursor: pointer;
        background-color: #917a49;
    }
    .block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 500px;
        margin: auto;
    }

    img {
        max-width: 200px;
        box-shadow: 0px 0px 20px #000000;
    }

    .logo {
        max-width: 200px;
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