function pia() {
    document.body.style.backgroundImage="url('" +  + "')";
}


$( document ).ready(function() { // function nhỏ nhỏ để chạy pop up siêu dễ :))
    $('#headerVideoLink').magnificPopup({
     type:'inline',
     midClick: true // Cái này cho phép m ấn nút giữa của chuột vẫn chạy đc video... cứ để true nếu m không muốn động vào nó 
   });
     
   });
