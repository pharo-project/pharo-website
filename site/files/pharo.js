jQuery(document).ready(function() {
	jQuery('a[data-toggle="lightbox"]').click(function(e) {
		jQuery(this).ekkoLightbox(); e.preventDefault();
	});
});
