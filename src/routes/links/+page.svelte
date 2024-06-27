<script>
    import gh from "$lib/images/github.svg";
    import twt from "$lib/images/twitter.svg";
    import yt from "$lib/images/youtube.png";
    import twitch from "$lib/images/twitch.svg";
    import sm64 from "$lib/images/sm64.webp";
	import LinkBlock from "$lib/ui/LinkBlock.svelte";
</script>

<title>Links</title>
<h1>Cool links!</h1>

<LinkBlock
    title="Github"
    alt="Github Logo."
    href="https://github.com/evanbuggy"
    src={gh}
    text="Source code for all my projects!">
</LinkBlock>

<LinkBlock
    title="Twitter"
    alt="Twitter Logo."
    href="https://twitter.com/lnfiniteAzure"
    src={twt}
    text="The social media I am most active on, that absolutely does not officially go by any other name.">
</LinkBlock>

<LinkBlock
    title="YouTube"
    alt="YouTube Logo."
    href="https://youtube.com/Buggy_Evan"
    src={yt}
    text="Watch all of my old embarassing videos, or even one of my new ones!">
</LinkBlock>

<LinkBlock
    title="Twitch"
    alt="Twitch Logo."
    href="https://twitch.tv/evanbuggy"
    src={twitch}
    text="I stream random stuff every blue moon.">
</LinkBlock>

<LinkBlock
    title="RHDC"
    alt="This guy!"
    href="https://romhacking.com/user/Buggy"
    src={sm64}
    text="Some of my old Super Mario 64 ROM Hacks, and maybe some new ones?">
</LinkBlock>

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