//============Javascrip for subscription webpage ============
//===========================================================================
// * The Javascript will serve an Important Aspect in the subscribe HTML as it checks for inputs on the user input and how it interacts with the DOM
// * By selecting elements from the page we are able to manipulate the values such as user NAMES and Emails and display them as alert messages using JAVASCRIPT
// * The Other ASpect of manipulation is by making an image carousell, however i decided to use the CSS Styling instead as it is much easier, Check out
//  Index HTMl Styling >> Slideshow for details on how i did it

// This function checks all the data Value and if it returns true, using document.getElementById.values then display it with the alert(confirmationMessage) Message Box
function checkFormData()
{
    var titleError = TitleComboBoxValue();   // Checks the Title ComboBox if it returns errorMsg
    var nameError = checkValues();           // Check the Name Boxes if it returns errorMsg
    var checkBoxError = checkLegalBoxes();   // Makes Sure all CheckBoxes are ticked
    
    if ( titleError.length >0 || nameError.length >0 ||checkBoxError.length >0)
        { alert(nameError); }                         // To confirm that none of the values is 0 (The user has actually typed/ ticked more than once)
    else
        {
            var selectedTitle = document.getElementById("Name_title").value;
            var fnameElement = document.getElementById ("FIRSTNAME").value;
            
            var confirmationMessage = "--------------------------------";
            confirmationMessage ="Dear "+" "+selectedTitle+" "+fnameElement+ ", \n";;
            confirmationMessage += "Thank you for signing up with us!\n";
            confirmationMessage += "-------------------------------------------\n";
            confirmationMessage += "You will receive an email from us shortly. Have a nice day!\n";
            
           alert(confirmationMessage);
        }
    

    
}

// ------------Combo Box for Title Funtion----------
function TitleComboBoxValue()
{
    
    var selectedTitle = document.getElementById("Name_title");
    var comboBoxHeaderElement = document.getElementById("comboBoxHeader");
    var errorMsg = "";

    //if the user has NOT selected anything
    if (selectedTitle.value.length <= 0)
        {
            comboBoxHeaderElement.style.backgroundColor = "lightpink";
            errorMsg += "\n Please select at least 1 title from the list \n";
            
         }
  else{
      comboBoxHeaderElement.style.backgroundColor = "white";
      
  }
   
     return (errorMsg);
  
}

// ------------Name and Email Funtion----------
// The code used in to check the values are adapted from a Cousera tutorial Web Development 7.3.1 Selecting elements on a page
function checkValues()
{
  
  var fnameElement = document.getElementById ("FIRSTNAME");
  var lnameElement = document.getElementById ("LASTNAME");
  var emailElement = document.getElementById ("EMAIL");
  var errorMessage = "";
  var emailAsString = emailElement.value.trim();
  var fnameString = fnameElement.value.trim();
  var lnameString = lnameElement.value.trim();
  // If the Value in the box is less than 0 the user has not typed anything return invalid
  if (fnameElement.value.trim().length <= 0 || !isValidNameFormat (fnameString))
  {
      
     errorMessage += "\n Invalid First Name \n";
    fnameElement.style.background = "pink";
  }
  else
    fnameElement.style.background = "white";

  // If the Value in the box is less than 0 the user has not typed anything return invalid
  if (lnameElement.value.trim().length <= 0 || !isValidNameFormat (lnameString))
  {
    errorMessage += "\n Invalid Last Name \n";
    lnameElement.style.background = "pink";
  }
  else
    lnameElement.style.background = "white";

  // If the Value in the box is less than 0, the user has not typed anything yet return invalid
  if (emailAsString.length <= 0 || !isValidEmailFormat (emailAsString))
  {
    errorMessage += "\n Invalid Email \n";
    emailElement.style.background = "pink";
  }
  else
    emailElement.style.background = "white";


  errorMessage += checkLegalBoxes();

  errorMessage +=  TitleComboBoxValue();

  return (errorMessage);
}

//=========== Check if the Name and Email is in proper email format========

// Using the following expressions we can exclude any invalid expressions to the email letters; example removing any ^&*()symbols while requring a @ symbol for emails
function isValidEmailFormat (value) 
{
 //Regular Expression Pattern example found in W3resource.com
//www.w3resource.com/javascript/form/email-validation.php
 var regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (regularExpression.test(value))
    return (true)
 else
    return (false)
}

// Similar Expression is used for Names as we can exclude any symbols or numerials for names as invalid; exmaple 1-9,$%^&*() are all invalid values
function isValidNameFormat(value) 
{
 //Regular Expression Pattern example found in forum stackoverflow.com
//https://stackoverflow.com/questions/46664142/js-regular-expression-for-first-name
 var regularExpression = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
 if (regularExpression.test(value))
    return (true)
 else
    return (false)
}
//==================== CheckBoxes ==============
function checkLegalBoxes()
{
    var checkBoxHeader = document.getElementById("checkBoxHeader");
    var errorMsg = "";
    var checkBoxesArray = document.getElementsByClassName("term_cond")
     
    for( var i=0; i<checkBoxesArray.length; i++)
        {
            // This makes sure that ONLY IF all check boxes are ticked it will return true, else Invalid
            if(checkBoxesArray[i].checked == true)
                {
                    checkBoxHeader.style.backgroundColor = "white";
                }
            else
             {
            checkBoxHeader.style.backgroundColor = "lightpink";
            errorMsg += "\n Please tick ALL Boxes in order to proceed \n";
             }
        }
    
    
    return (errorMsg);
 }
    


// ----------ADDES RESET Button---------------

function resetFormData()
{
  // below code causes web-page to refresh/reload itself ...
  location = window.location.href;
}