<script>
    import mkr from "$lib/images/mario_kart_reanimated.jpg";
    import DLBlock from "$lib/ui/DownloadBlock.svelte";
</script>

<title>Downloads</title>
<h1>Downloads</h1>

<DLBlock
    title="mario_kart_reanimated_mega_pack.zip"
    alt="A scenic shot of mario_kart_reanimated."
    link="downloads/mario_kart_reanimated_mega_pack.zip"
    src={mkr}
    text="This is a collection of versions of the map, mario_kart_reanimated, which I made as an edit of mario_kart_d_v30 for the Team Fabulous 2 Reanimated project. It includes the original map packed with assets, a deathmatch version for Open Fortress, and a version compiled with HDR.">
</DLBlock>

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