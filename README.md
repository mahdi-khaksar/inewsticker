inewsticker
===========
#Description
jQuery news ticker Three effects: fade and slide and typing .

demo : [inewsticker](http://www.ijquery.ir/demo.php?page=effects/inewsticker)
#Usage
Step 1 : add jQuery.js and inewsticker.js before closed body tag

Step 2 : add inewsticker function

        $(document).ready(function() {
                $('#name').inewsticker({
                        speed       : 1500,
                        effect      : 'fade',
                        dir         : 'ltr',
                        font_size   : 13,
                        color       : '#fff',
                        font_family : 'arial',
                        delay_after : 1000		
                });
        });	            

Step 3 : change #name to your selector

#Options

        
        speed : text change speed
        effect : text effect
        dir : text direction (ltr or rtl)
        font_size : text font size
        color : text color
        font_family : text font family
        delay_after : text speed delay after
        
#Author
        
mahdi khaksar


