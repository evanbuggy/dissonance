<script>
	export let data;
</script>

<h1>Blog</h1>

{#each data.summaries as { slug, title, date, blurb, bg_img }}
    <a href="/blog/0/{slug}">
        <div class = "blogDiv" style="background-image: url('/images/bg/{bg_img}');">
            <h2 class = "blogTitle">{title}</h2>
            <p class = "blogDate">{date}</p><hr><p>{blurb}</p>
        </div>
    </a>
{/each}

<div class = "btnSpace">
    <button class = "backBtn" onclick = "location.href = '/blog/{data.back}'" type = button >Back</button>
    <button class = "nextBtn" onclick = "location.href = '/blog/{data.next}'" type = button >Next</button>
</div>

<style>
    .btnSpace {
        margin-top: 40px;
    }
    
    .blogDiv {
        box-shadow: inset 0 0 20px #000000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 20px;
        margin-top: 10px;
        border-style: solid;
        border-radius: 15px;
        border-width: 2px;
        border-color: #403d3d;
        transition: 0.5s;
    }

    .blogDiv:hover {
        transform: scale(1.1);
    }

    h2 {
        display: inline;
        font-family: "ACNH";
    }

    hr {
        color: #FFFFFF;
    }

    p {
        font-family: "ACNH";
        color: #FFFFFF;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    .blogDate {
        display: inline;
        float: right;
        font-family: "ACNH";
        color: #FFFFFF;
        font-size: 14px;
        margin-top: 5px;
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