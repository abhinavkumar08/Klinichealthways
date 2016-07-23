   var mainApp = angular.module("wrap", []);
   var home=0;
   var about=0;
   var contact=0;
   var sitemap=0;
   var service=0;

    
         
         mainApp.controller('wrappercontroller', function($scope) {

		$scope.$on('aboutEvent', function(){
            
            if(about==1)return;
             about=1;
            
            
		$scope.page="about.htm";
       
            console.log("about class added")
            
        if(contact==1)
            contact=0;
        
         
        if(home==1)
            home=0;
            
            
        if(sitemap==1)
            sitemap=0;
            
            
        if(service==1)
            service=0;
            
            
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service);
	
	});

		$scope.$on('homeEvent', function(){
	    
         if(home==1)return;
             home=1;
       $scope.page="home.htm";
            
            
            if(contact==1)
            contact=0;
        
         
        if(about==1)
            about=0;
            
            
        if(sitemap==1)
            sitemap=0;
            
            
        if(service==1)
            service=0;
            
            
            
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service);
         

	});
             
             
        	$scope.$on('servicesEvent', function(){
                
            
            
			var $ourServiceHeader=$(".our-services-header");
             
                
                
                
             if(about==1 || contact==1 || sitemap==1 )
                {
                    $scope.page="services.htm";
                    
                     if(contact==1)
                        contact=0;
        
         
                    if(about==1)
                        about=0;
              
            
                    if(sitemap==1)
                        sitemap=0;
            
                    
                    
                    
                }
            else
                {
                    $('html,body').animate({            
                    scrollTop : $ourServiceHeader.offset().top},
                    'slow'
                    
                );
		    
                }
                
            
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service);    

	
	});
             
             
       	$scope.$on('contactEvent', function(){
                
            
            
	           if(contact==1)return;
             contact=1;
            
            
		$scope.page="contact.htm";
       
            console.log("about class added")
            
        if(about==1)
            about=0;
        
         
        if(home==1)
            home=0;
            
            
        if(sitemap==1)
            sitemap=0;
            
            
        if(service==1)
            service=0;
            
            
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service); 

	
	});
             
             
             
      	$scope.$on('siteMapEvent', function(){
                
            
            
	           if(sitemap==1)return;
             sitemap=1;
            
            
		$scope.page="sitemap.htm";
       
            
            
        if(about==1)
            about=0;
        
         
        if(home==1)
            home=0;
            
            
        if(contact==1)
            contact=0;
            
            
        if(service==1)
            service=0;
            
            
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service); 

	
	});
             
             
            
         });



    mainApp.controller('midviewController', function($scope){
       
        $scope.$on('aboutEvent', function(){
            
            console.log("hello");
        })
        
    });


mainApp.controller('sitemapcontroller', function($scope){
    
    var url="https://www.google.co.in/maps/place/Klinic+Healthways,+IGNOU+Main+Road,+Sainik+Farm,+New+Delhi,+Delhi/@28.51902,77.1944954,15z/data=!4m5!3m4!1s0x390ce1efe35a6d19:0x52e734f2738a5db6!8m2!3d28.5187741!4d77.206791";
       
        $scope.$on('mapclick', function(){
            
            window.open(url,'_blank');
        })
        
    });
         

        
        


