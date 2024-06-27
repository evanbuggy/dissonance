<script>
    import HomeBlock from "$lib/ui/ItemBlock.svelte";
    import blog from "$lib/images/buggy_message_highlight.png";
    import links from "$lib/images/obs_element.png";
    import gallery from "$lib/images/unlock_sub.png";
</script>

<title>Home</title>

<h1>Welcome!</h1>
<p>Welcome to my website! Ran and owned by me, Buggy.</p>

<HomeBlock
    title="My Blog"
    alt="My blog!"
    href="/blog/0"
    src={blog}
    text="This is my blog where I post lots of things! Hopefully there should be something interesting to read in here at some stage.">
</HomeBlock>

<HomeBlock
    title="My Links"
    alt="Contacts and more!"
    href="/links"
    src={links}
    text="If you're looking for some more of my work or other methods of contacting me, then check these links!">
</HomeBlock>

<HomeBlock
    title="My Gallery"
    alt="My Old Artwork!"
    href="/gallery"
    src={gallery}
    text="Have a look at some collections of my drawings and other pieces, whether they be old or (hopefully) new.">
</HomeBlock>

<p>This website was made primarily as a way to show off some of my work and interests alongside learning self hosting, deployment, web development and everything else that comes with it, like HTML, CSS, Javascript, and my Javascript framework of choice Sveltekit.</p>

<style>
    h1 {
        color: #403d3d;
        font-family: "ACNH";
        line-height: 45px;
        text-align: center;
    }

    p {
        color: #403d3d;
        font-family: "ACNH";
        text-align: center;
        line-height: 28px;
    }

    @font-face {
        font-family: ACNH;
        src: url("$lib/fonts/FOT-Seurat_Pro_B.otf") format("opentype");
    }
</style>