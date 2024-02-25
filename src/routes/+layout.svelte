<script>
    import Navbar from "$lib/ui/Navbar.svelte";
    import Logo from "$lib/ui/Logo.svelte";
</script>

<Logo/>
<Navbar/>

<div>
    <slot />
</div>
<button class = "rainbowBtn" onclick = "location.href = 'https://ko-fi.com/buggy'" type = button >Donate!</button>


<style>
    :global(body) {
        background-image: url("$lib/images/website_bg.png");
        background-repeat: repeat;
        animation-name: scroll;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes scroll {
        from {background-position: 0px 0px;}
        to {background-position: 200px 200px;}
    }

    div {
        margin: auto;
        max-width: 1000px;
        padding: 30px;
        background-color: #fff7e6;
        box-shadow: 0px 0px 20px;
        border-radius: 25px;
    }

    .rainbowBtn {
        margin: auto;
        margin-top: 30px;
        padding: 15px 60px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        background-color: #b6a47e;
        border-radius: 25px;
        color: white;
        border: none;
        display: block;
        font-size: 16px;
        font-family: ACNH;
        transition: 0.4s;
    }

    .rainbowBtn:hover {
        animation: rainbow 4s linear infinite;
        transform: scale(1.1);
        cursor: pointer;
    }

    @keyframes rainbow {
        0%   {background-color: #b6a47e;}
        20%  {background-color: orange;}
        40%  {background-color: red;}
        60% {background-color: green;}
        80% {background-color: blue;}
        100% {background-color: #b6a47e;}
    }
</style>