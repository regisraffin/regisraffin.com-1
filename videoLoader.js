var originalUrl = document.location.href;
movieToLoad = originalUrl.search.replace( "=", "" );
if(movieToLoad != "")
{
	loadVideo(movieToLoad)
}

function loadVideo(movie)
{
  video = $(".video");
  $("#vimeo").attr('src','//player.vimeo.com/video/'+videos[movie].vimeocode);
  $(video).css("display","inline-block");
  
  legend = $(".legend");
  legendCustomer = $(".legend .customer");
  legendDesc = $(".legend .desc");
  $(legendCustomer).html(videos[movie].head);
  $(legendDesc).html(videos[movie].desc);
  $(legend).css("display","inline-block");
  
  window.history.pushState('page2', 'Title', '?video=' + movie);
}