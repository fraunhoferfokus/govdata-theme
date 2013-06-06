AUI().ready(
	'liferay-hudcrumbs', 'liferay-navigation-interaction',
	function(A) {
		var navigation = A.one('#navigation');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		var siteBreadcrumbs = A.one('.site-breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}
	});	
	// ---------- Fraunhofer FOKUS ----------------------


AUI().ready(
function(B) {
	       	    
	$("#accordion").accordion({
	    heightStyle: "content",
	    active: false,
		collapsible: true
	});

    if($('#socialshareprivacy').length > 0){
      	$('#socialshareprivacy').socialSharePrivacy({
      	'txt_help': 'off'
      	}); 
    }
    $('.carousel').carousel({
        interval: 8000
        })
			$( "#tabs" ).tabs();


//---------- Placeholder input fields ---------------------
		
    
    
// ---Suche Content	
		
		$('#layout-column_column-3 form input[type="text"]').val('Suche in Neues, Bibliothek und Portal');		
		$('#layout-column_column-3 form input[type="text"]')
		.on('focus', function(){
		    var $this = $(this);
		    if($this.val() == 'Suche in Neues, Bibliothek und Portal'){
		        $this.val('');
		    }
		})
		.on('blur', function(){
		    var $this = $(this);
		    if($this.val() == ''){
		        $this.val('Suche in Neues, Bibliothek und Portal');
		    }
		});
	
			
		

		if(!Modernizr.input.placeholder){

			$('[placeholder]').focus(function() {
			  var input = $(this);
			  if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			  }
			}).blur(function() {
			  var input = $(this);
			  if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			  }
			}).blur();
			$('[placeholder]').parents('form').submit(function() {
			  $(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
				  input.val('');
				}
			  })
			});

		}

	
		
		
		if($('#column-1 #p_p_id_3_ input[type=text]').val() == "") {
			$('#column-1 #p_p_id_3_ input[type=text]').val('Seite durchsuchen');		
		$('#column-1 #p_p_id_3_ input[type=text]')
		.on('focus', function(){
		    var $this = $(this);
		    if($this.val() == 'Seite durchsuchen'){
		        $this.val('');
		    }
		})
		.on('blur', function(){
		    var $this = $(this);
		    if($this.val() == ''){
		        $this.val('Seite durchsuchen');
		    }
		});
		
		}
});

