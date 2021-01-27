<script type="text/javascript">

     
    $(document).ready(function(){
        $('#namecheck').hide();
        $('#contactcheck').hide();

        var name_err = true;
        var contact_err = true;

        // Name check
        $('#name').focusout(function() {
          name_check();
        });
      
      
      function name_check() {
        var pattern= /^[a-zA-Z ]*$/;
        var name_val = $('#name').val();
        if( name_val.length=='')
        {
          $('#namecheck').show();
          $('#namecheck').html("**Please fill out name");
          $('#namecheck').focus();
          $('#namecheck').css("color","red");
          name_err= false;
          return false;               
        }		 
        else if(!pattern.test(name_val)|| name_val.length<3)
        {
          $('#namecheck').show();
          $('#namecheck').html("**Please give a valid name");
          $('#namecheck').focus();
          $('#namecheck').css("color","red");
          name_err= false;
          return false; 
        }
        else
        {
          $('#namecheck').hide();
        }
      }

       
      // phone check
      $('#contact').focusout(function() {
          contact_check();
      });
    
      function contact_check() {
        var pattern=/^\d{10}$/;
        var contact_val = $('#contact').val();
    
        if(contact_val.length=='')
        {
          $('#contactcheck').show();
          $('#contactcheck').html("**Please fill contact number");
          $('#contactcheck').focus();
          $('#contactcheck').css("color","red");
          contact_err= false;
          return false;               
        }
        else if(!pattern.test(contact_val))
        {
          $('#contactcheck').show();
          $('#contactcheck').html("**contact number is not valid");
          $('#contactcheck').focus();
          $('#contactcheck').css("color","red");
          contact_err= false;
          return false; 	
        }
        else
        {
          $('#contactcheck').hide(); 
        }           
      }
    
    });
    </script>