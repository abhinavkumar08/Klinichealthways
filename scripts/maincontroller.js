   var mainApp = angular.module("wrap", []);
   var home=0;
   var about=0;
   var contact=0;
   var sitemap=0;
   var service=0;
var breathe=0;
var dental=0;
var polyklinic=0;
var kdclabs=0;

    
         
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
            
         breathe=0;
                 dental=0;
                 polyklinic=0;
                 kdclabs=0;
            
            
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
            
          breathe=0;
                 dental=0;
                 polyklinic=0;
                 kdclabs=0;
            
           
            
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service);
         

	});
             
             
        	$scope.$on('servicesEvent', function(){
                
            
            
			var $ourServiceHeader=$(".our-services-header");
             
                
                
                
             if(about==1 || contact==1 || sitemap==1 || breathe==1 || dental==1 || polyklinic==1 || kdclabs==1)
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
           
                breathe=0;
                 dental=0;
                 polyklinic=0;
                 kdclabs=0;
            
         
            
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
        breathe=0;
                 dental=0;
                 polyklinic=0;
                 kdclabs=0;
            
             
            
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
            
          breathe=0;
                 dental=0;
                 polyklinic=0;
                 kdclabs=0;
            
           
        console.log(home);
            console.log(about);
            console.log(contact);
            console.log(sitemap);
            console.log(service); 

	
	});
             
             
             $scope.$on('breathesleep', function(){
                 
                 if(breathe==1)return;
                 
                 breathe=1;
                 dental=0;
                 polyklinic=0;
                 kdclabs=0;
                 $scope.page="breathesleep.htm";
                 console.log("breathesleep");
                 
             });
             
               $scope.$on('dental', function(){
                 
                if(dental==1)return;
                   
                 breathe=0;
                 dental=1;
                 polyklinic=0;
                 kdclabs=0;
                 $scope.page="dental.htm";
                 console.log("dental");
                 
             });
             
               $scope.$on('polyklinic', function(){
                 
                if(polyklinic==1)return;
                   
                 breathe=0;
                 dental=0;
                 polyklinic=1;
                 kdclabs=0;
                 $scope.page="infectious.htm";
                 console.log("infectious");
                 
             });
             
                $scope.$on('kdclabs', function(){
                 
                if(kdclabs==1)return;
                   
                 breathe=0;
                 dental=0;
                 polyklinic=0;
                 kdclabs=1;
                 $scope.page="kdclabs.htm";
                 console.log("infectious");
                 
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
         

        
        


