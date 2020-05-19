Feature: Test login page
Scenario Outline: login to free crm
Given user is on Free CRM page
When Title of page is free crm
Then enter user "<username>"
Then enter pass "<password>"
And click on login button
Then User is on Home page after logged-in
Then click on contact
Then add new contact
Then submit contact details "<fname>" and "<lname>" and "<position>" and save

Examples:
			|username								|password|fname		|lname		|position		|
			|shailesht304@gmail.com	|Test@123|shailesh|tadas		|manager		|
			
