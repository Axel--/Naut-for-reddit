#Addon: Small Header

The default theme has a header that is 196px. This addon changes the header height to 144px. 

**Make sure the header image you are using is 1920px by 144px.**

Some notes:

* Darker background images work best. 
* Name it `headerimg` and upload it to the stylesheet page. 
* Keep in mind that users below a 1920px wide resolution will not see the full image, so don't display content that would be cut off (such as text) on the full width.

##Addon: Larg Header

The default theme has a header that is 196px. This addon changes the header height to 294px.

**Make sure the header image you are using is 1920px by 294px.**

Some notes:

* This addon should be used for subreddits that are very visual, such as art subreddits. If you can't think of a suitable image that would fit your subreddit theme, reconsider not using this addon.
* Darker background images work best. 
* Name it `headerimg` and upload it to the stylesheet page. 
* Keep in mind that users below a 1920px wide resolution will not see the full image, so don't display content that would be cut off (such as text) on the full width.

##Addon: Content Overlap Header

The default theme has a header that is 196px. This addon changes the height of the header to be anything >192px. 

What it does, is it essentially 'hides' the header and uses the body of the page as a background. Your image should be 1920px wide and >192px in height. Play around with it to see what you like. 

**This addon really works best if you have an eye for design. If you don't at all, chances are you'll just make the page look worse. So be cautious!**

Some notes:  

* This addon should be used for subreddits that are very visual, such as art subreddits. If you can't think of a suitable image that would fit your subreddit theme, reconsider not using this addon.
* Darker background images work best. 
* Name it `headerimg` and upload it to the stylesheet page. 
* Keep in mind that users below a 1920px wide resolution will not see the full image, so don't display content that would be cut off (such as text) on the full width.  

#Addon: Custom Colors

This addon allows you to easily customize all colors in the Naut theme. 

Some notes:

* Be cautious with changing the link colors! Don't use dark shades of purple, because those look like links that a user has visited already. Don't use black or gray, otherwise they don't stand out enough from regular text. Don't use colors that are too light, they strain the eyes and hurt readability.
* If you use this addon with the colored infobox addon, use the same color on the buttons as the infobox. This looks really good!
* Make the button hover color a little lighter than the button color, and the button active color a little darker for best results.

#Addon: Infobox ReColor

On the right, the sidebar box that contains the subscribe button and subreddit title/subscribers, that's the infobox. By default it's white, but with this addon you can change the background color very easily, like how it looks on /r/Naut. 

Some tips:

* It's **really** important that the color you choose fits well with the image in the infobox. If you take a general color from the image's palette, it almost always looks good!
* Keep in mind the subscribe button stands out less if you use a similar green or a really conflicting color. 

#Addon: Custom Snoo

The Snoo is Reddit's alien mascotte. He's in the top-left! With this addon you can change Snoo with your own. 

Some notes:

* **The image should be 42px by 42px!**
* Make it clear for the user that clicking that image leads them back to Reddit's homepage. 

#Addon: Custom Subreddit Title

If you have a special title image for your subreddit that would look better than just regular text, you can use this Addon. For example, /r/Google might want to use the actual Google logo. 

Some notes:

* **The image should be 42px in height** and anything <320px in width.
* Make sure that your image is completely visible and readable on your background image too. Add some drop shadows in Photoshop if it doesn't. If your title image is completely white on a light background, it's not readable. Please don't do that.
* The addon replaces both the header and sidebar title. You can also just replace either by removing one of the two blocks in the addon.

#Addon: User Flair Images

Sometimes you want to add images to user flairs. This is how to do it easily.

Some notes:

* The images are 16px by 16px. 
* Make a spritesheet that is 16px wide and any amount in height. Then place all the image flairs below eachother. This will give you a list of flairs, each 16px.
* Name the spritesheet "userflairs" and upload it. 
* For each new flair, you need a new line of CSS.
* You can change the name of the flairs by replacing the `one` in `.flair-one`. It could be `.flair-photographer` or `.flair-arsenal`.
* Change the background position to correspondent with the location of the image flair in the spritesheet. The first image is `0px 0px`, then `0px -16px`, `0px -32px`, etc. 
* Please don't make the image flairs taller than 16px. Larger flairs push the comment content down and can very easily wreck the page design **and readability**. Keep them minimal.

#Addon: Link Flair Customization

Link Flairs are helpful in labeling and categorizing content. Below you'll find an example, **please don't copy this addon directly but judge whether you need each line in the addon.** Linkflairs are a great place to be creative, because you can influence the entire page for posts with just that Link Flair. Be creative!

#Addon: Custom CSS Text

For customizing the css text, such as the downvote hover text, or the name of your subscribers in the sidebar. 

Please don't make them say something completely different that would confuse the user.

#Addon: Remove Sidebar Image

If you would like to remove the Sidebar Image that is included in the base Naut 4 Theme, use this addon. This will remove the Sidebar Image using margins. If you'd like to change the sidebar image, just replace the `sidebarimg` file with your own.

Thanks to /u/turikk