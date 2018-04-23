**Disclaimer:**

I'm not the author of all this code, I just saw this feature in [r/BrickBlock](https://www.reddit.com/r/BrickBlock/). Then I searched for this addon but didn't found anything about it, so I packed it as a addon by myself.


**Info:**

If you want to remove the down button (which is used to hate the posts) and use a rocket in the top button, this plugin is for you.


**Here is the addon:**

    /* Addon: Rocket button - by u/Plasmmer */

    .arrow {
        background-image: url(%%rocket%%)!important;
    }
    .arrow.up:focus:after {
        position: absolute;
        left: 18px;
        bottom: 48px;
        width: 28px;
        height: 28px;
        opacity: 1;
        z-index: 100;
        content: " ";
        background: #f50;
        border-radius: 28px;
        animation: upvote .35s ease-out forwards;
        -webkit-animation: upvote .35s ease-out forwards;
    }
    .arrow.up {
        background-position: 0px -4px!important;
    }
    .arrow.upmod {
        background-position: -32px -4px!important;
    }
    .down {
        display: none;
    }

    /* End Addon */


Upload the [rocket.png](https://b.thumbs.redditmedia.com/_nPIeUEGMOyoXPoFzSOmU6SVxbApw3yU7C_1RXiKxxM.png) image (that is included in this folder) to your stylesheet.

**Update history:**

If you find any error, please contact me and I'll update this.

**04/23/18 11:30:** Plugin created

**04/23/18 11:57:** Trying to fix upmod button (showing the rocket when it was clicked)

**04/23/18 12:16:** Click effect (in my plugin I modified it to work not only in upmod button, but also in up button)

**04/23/18 12:54:** Credits in CSS comment

**04/23/18 15:01:** Fixed upmod button (showing the rocket when it was clicked)

**04/23/18 15:39:** Update the rocket image (fix)

**04/23/18 16:00:** Fix CSS

**04/23/18 17:09:** Fixed up button click effect

###[Click to find other addons made by me](https://www.reddit.com/r/naut/comments/8ecmtr/plasmmers_addon_list/).
