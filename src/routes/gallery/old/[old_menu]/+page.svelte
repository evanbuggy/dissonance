<script>
	export let data;
</script>

<h1>Old Gallery</h1>

<div class="container">
    {#each data.summaries as { old_slug, date, preview_img }}
        <a href="/gallery/old/0/{old_slug}">
            <div class = "oldPic" style="background-image: url('../../src/lib/images/old/preview/{preview_img}');">
                <p class = "oldDate">{date}</p>
            </div>
        </a>
    {/each}
</div>

<div class = "btnSpace">
    <button class = "backBtn" onclick = "location.href = '/blog/{data.back}'" type = button >Back</button>
    <button class = "nextBtn" onclick = "location.href = '/blog/{data.next}'" type = button >Next</button>
</div>

<style>

    .container {
        max-width: 620px;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
    }

    .btnSpace {
        margin-top: 40px;
    }
    
    .oldPic {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin: 5px;
        transition: 0.5s;
        width: 300px;
        height: 300px;
        flex: 50%
    }

    .oldPic:hover {
        transform: scale(1.1);
    }

    p {
        font-family: "ACNH";
        color: #FFFFFF;
        margin-top: 0px;
        margin-bottom: 0px;
        text-shadow: #000000 1px 0 10px;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    .oldDate {
        font-family: "ACNH";
    }

    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        text-align: center;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }

    .nextBtn {
        font-family: "ACNH";
        margin-right: auto;
        float: right;
        display: inline;
        background-color: #b6a47e;
        border-radius: 20px;
        border: none;
        color: white;
        padding: 15px 60px;
        text-align: center;
        font-size: 16px;
        transition: 0.2s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .nextBtn:hover {
        cursor: pointer;
        background-color: #917a49;
    }

    .backBtn:hover {
        cursor: pointer;
        background-color: #917a49;
    }

    .backBtn {
        font-family: "ACNH";
        margin-left: auto;
        display: inline;
        background-color: #b6a47e;
        border-radius: 20px;
        border: none;
        color: white;
        padding: 15px 60px;
        text-align: center;
        font-size: 16px;
        transition: 0.2s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
</style>