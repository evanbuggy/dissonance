<script>
    import gh from "$lib/images/github.svg";
    import twt from "$lib/images/twitter.svg";
    import yt from "$lib/images/youtube.png";
    import twitch from "$lib/images/twitch.svg";
</script>

<h1>Cool links!</h1>

<div>
    <img src = {gh} alt = "Github Logo.">
    <a href="https://github.com/evanbuggy">Github</a>
</div>
<p>If I ever make any repositories that are actually public!</p>

<div>
    <img src = {twt} alt = "Twitter Logo.">
    <a href="https://twitter.com/lnfiniteAzure">Twitter</a>
</div>
<p>The social media I am most active on, that absolutely does not officially go by any other name.</p>

<div>
    <img src = {yt} alt = "YouTube Logo.">
    <a href="https://youtube.com/Buggy_Evan">YouTube</a>
</div>
<p>Watch all of my old embarassing videos, or even one of my new ones!</p>

<div>
    <img src = {twitch} alt = "Twitch Logo.">
    <a href="https://twitch.tv/evanbuggy">Twitch</a>
</div>
<p>I stream random stuff every blue moon.</p>

<style>
    div {
        max-width: 300px;
        margin: auto;
    }

    img {
        max-height: 100px;
        display: inline;
    }

    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        text-align: center;
    }

    a {
        font-family: "ACNH";
        font-size: 30px;
        text-align: center;
        display: inline;
        float: right;
        color: #403d3d;
        margin-top: 25px;
    }

    p {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 28px;
        text-align: center;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>