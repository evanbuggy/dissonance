<script>
	export let data;
</script>

<title>{data.pic.date}</title>

<div>
    <h1>{data.pic.date}</h1>
    <img src="/images/old/{data.pic.img}" alt={data.pic.text}>
    <p>{data.pic.text}</p>
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

    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        text-align: center;
    }

    p {
        color: #403d3d;
        font-family: "ACNH";
    }
</style>