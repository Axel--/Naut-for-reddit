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
