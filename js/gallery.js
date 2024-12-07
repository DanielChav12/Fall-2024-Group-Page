
// A $( document ).ready() block.
$( document ).ready(function() {
    // console.log( "ready!" );
 
 
    $("#galleryArtofLife").nanogallery2({
 
     thumbnailHeight: "auto",
     thumbnailWidth:  "450",
     thumbnailBorderVertical: "0",
     thumbnailBorderHorizontal: "0",
     thumnailLabel: {
         position: "overImageOnBottom",
         display: false
     },
     thumbnailHoverEffect2: "imageScaleIn80|LabelAppear75",
     thumbnailGutterWidth: 20,
     thumbnailGutterHeight: 20,
     thumbnailAlignment: "center",
     thumbnailOpenImage: true
 
 
   });
 
 
 
 
 });
 