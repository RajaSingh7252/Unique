document.getElementById('car1').addEventListener('mouseover', function()
   {
    this.style.filter = 'grayscale(0%)'
   });
 
   document.getElementById('car1').addEventListener('mouseout',
   function()
   {
    this.style.filter = 'grayscale(100%)'
   });