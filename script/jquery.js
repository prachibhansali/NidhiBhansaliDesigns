  $(document).ready(function(){
  	function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(19.1106854,72.83095070000002),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(19.1106854,72.83095070000002)});infowindow = new google.maps.InfoWindow({content:'<strong>NidhiBhansali Designs</strong><br>2, N South Road Number 9, JVPD Scheme, Juhu, Mumbai, Maharashtra 400049<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
  });
