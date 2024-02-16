<script>
    import gh from "$lib/images/github.svg";
</script>

<h1>Gallery</h1>

<div class = "container">
    <img class = "leftImg" src = {gh} alt = "Github Logo.">
    <div class = "textBlockRight">
        <a class = "rightText" href="gallery/scribbles">Lorem Ipsum</a>
        <p>Lorem Ipsum</p>
    </div>
    <hr>
</div>

<div class = "container">
    <div class = "textBlockLeft">
        <a class = "leftText" href="gallery/scribbles">Lorem Ipsum</a>
        <p>Lorem Ipsum</p>
    </div>
    <img class = "rightImg" src = {gh} alt = "Github Logo.">
    <hr>
</div>

<div class = "container">
    <img class = "leftImg" src = {gh} alt = "Github Logo.">
    <div class = "textBlockRight">
        <a class = "rightText" href="gallery/scribbles">Lorem Ipsum</a>
        <p>Lorem Ipsum</p>
    </div>
    <hr>
</div>

<style>
    .container {
        max-width: 600px;
        margin: auto;
    }

    .textBlockRight {
        display: inline;
    }

    .leftImg {
        max-height: 200px;
        display: inline;
    }

    .rightImg {
        max-height: 200px;
        display: inline;
        float: right;
    }

    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        text-align: center;
    }

    .leftText {
        font-family: "ACNH";
        font-size: clamp(1rem, 4vw, 2rem); 
        display: inline;
        float: left;
        color: #403d3d;
    }

    .rightText {
        font-family: "ACNH";
        font-size: clamp(1rem, 4vw, 2rem); 
        display: inline;
        float: right;
        color: #403d3d;
    }

    hr {
        color: black;
    }

    p {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
        display: block;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>