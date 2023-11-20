
jQuery(document).ready(function() {
            jQuery("ul li").dblclick(function() {
                        var element = jQuery(this);
                        var link = jQuery("a", element);
                        var linkValue = link.attr("href");
                        if (!linkValue) {
                            return;
                        }
                        document.location = linkValue;
                    });
        });
