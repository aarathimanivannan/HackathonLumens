Feature: lumensApplication TestCases (End to End validation)


Scenario Outline:  TC001 Register Account  

Given user should open link
Then click on accountand enter credentials "<SheetName>" and <RowNumber>
And click on submit
Examples:
|SheetName|RowNumber|
|Accountcreation|0|

Scenario Outline: TC002 Account Login and TC003 Verify title


Given User enters the URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully  
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC004 Verify User is able to select ceiling lights from Lighting tab

Given User navigates to the URL
Then enter credetials from given sheetname "<SheetName>" and rownumber <RowNumber>
And Navigate to lighting tab and select ceiling lights
Then Select the product Chandeliers and large chandeliers
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC005 & TC006 Verify user is able to select the specific product by applying  filter and add to cart

Given User navigates to the application
Then User enters the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
And Select the filter Ready to ship and style
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC0017 Verify logout functionality

Given User launches the application
Then User logins the application form from given sheetname "<SheetName>" and rownumber <RowNumber>
And User selects the Signout icon on the menu
Examples:
|SheetName|RowNumber|
|login|0|