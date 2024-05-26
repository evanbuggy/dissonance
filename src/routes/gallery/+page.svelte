<script>
    import old from "$lib/images/gallery_old_icon.png";
    import GalleryBlock from "$lib/ui/ItemBlock.svelte";
</script>

<title>Gallery</title>
<h1>Gallery</h1>

<GalleryBlock
    title="My Old Drawings"
    alt="Logo for my gallery of old drawings."
    href="/gallery/old/0"
    src={old}
    text="This is a gallery of a lot of old pieces I did when I was younger. A lot of them are from when I was still at school. I posted them to social media as a hobby for a long time. All of it is very, very embarassing to look at, and I have excluded a lot of pieces since they are too terrible for a human to lay eyes on.">
</GalleryBlock>

<style>
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
</style>