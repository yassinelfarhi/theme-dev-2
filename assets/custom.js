/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */



  $(document).ready(function(){
    
    
   $(".lang-switch").change(function(){
       
       var selectedLanguage = $('.lang-switch option:selected').val();
   
       switch(selectedLanguage) {
         case "FR":
          window.location = "https://maisonducaftan.myshopify.com/fr-shop";
          break;
         case "ENG":
          window.location = "https://maisonducaftan.myshopify.com/en-shop";
          break;
         case "AR":
          window.location = "https://maisonducaftan.myshopify.com/ar-shop";
          break;  
         default:  
       }
})
  });

    $(document).ready(function(){
      
    $(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
      
      //adding watching customers script
    
      
      function randomCustomers() {
         $("#customers_view label").text(Math.floor(Math.random() * 15));
      }
      
      setInterval(randomCustomers,3000);
            
});
      