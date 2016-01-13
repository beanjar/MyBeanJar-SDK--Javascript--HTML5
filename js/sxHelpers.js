/*																													
*            LOVINGLY CRAFTED BY:																						
*                                       @@@@                        @@@@                   								
*                                      @@@@                        @@@@                   								
*                                     @@@@                        @@@@                    								
*                                    @@@@                        @@@@                    								
*       @@@@@@@@@@@@  @@@@    @@@@  @@@@@@@@@@@@  @@@@@@@@@@@@  @@@@  @@@@@@@@@@@@  @@@@   @@@@ 						
*      @@@@          @@@@    @@@@  @@@@    @@@@  @@@@    @@@@  @@@@  @@@@    @@@@    @@@@@@@  							
*     @@@@    @@@@  @@@@    @@@@  @@@@    @@@@  @@@@    @@@@  @@@@  @@@@    @@@@      @@@@  							
*            @@@@  @@@@    @@@@  @@@@    @@@@  @@@@    @@@@  @@@@  @@@@            @@@@@@@@   							
*   @@@@@@@@@@@@  @@@@@@@@@@@@  @@@@@@@@@@@@  @@@@@@@@@@@@  @@@@  @@@@@@@@@@@@   @@@@   @@@@  							
*                                            @@@@  																		
*                                           @@@@   S  T  R  A  T  E  G  I  C           									
*                                          @@@@   C  O  M  M  U  N  I  C  A  T  I  O  N           						
*                                         @@      																		                                               																		
*                                                   																	
*                                            http://subplex.com															
*		
*
*	Name: 			sxHelpers.js
*
*	Description: 	A set of helper behaviors to facilitate a variety of projects--because everyone needs a little help sometimes.
*	Author: 		Christopher Charles (cccharle@subplex.com)
*	Dependencies: 	jQuery (2.x) 				(http://jquery.com/)
*					
*/



// Automagically centers absolutely positioned elements equipped with this class.
// Adjust's the element's absolute position relative to the current viewport without binding it to it (a la fixed positioning)
// Great for modals!
// *not to be taken orally

function sxAutocenterer(){	
};

function sxAutoResize(){
	var deviceWidth = jQuery( window ).width();
	var deviceHeight = jQuery( window ).height();
	var containerWidth = jQuery( "#puzzImg").width();
	var containerHeight = jQuery( "#puzzImg").height();

	if (deviceWidth <= containerWidth) {
		jQuery("#puzzImg").width(deviceWidth * 0.9);
		jQuery("#puzzImg").height(deviceWidth * 0.9);
	}

	if (deviceHeight <= containerHeight) {
		jQuery("#puzzImg").width(deviceHeight * 0.9);
		jQuery("#puzzImg").height(deviceHeight * 0.9);
	}
}