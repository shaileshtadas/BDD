package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert; 

public class LoginStepDefinition {
	WebDriver driver;
	JavascriptExecutor js;
	
	@Given("^user is on Free CRM page$")
	public void user_is_on_Free_CRM_page() {
	   System.setProperty("webdriver.chrome.driver","/Users/stadas/Documents/My workspaces/Cucumber-leraning/CucumberBDDProject/Driver/chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.manage().window().maximize();
	   driver.manage().deleteAllCookies();
	   driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	   driver.get("https://ui.freecrm.com");
	}

	@When("^Title of page is free crm$")
	public void title_of_page_is_free_crm()  {
	    String title = driver.getTitle();
	    System.out.println("Title of the page is "+title);
	    Assert.assertEquals("Cogmento CRM", title);
	}

	@Then("^enter user \"([^\"]*)\"$")
	public void enter_user(String username)  {
	   driver.findElement(By.name("email")).sendKeys(username);
	}

	@Then("^enter pass \"([^\"]*)\"$")
	public void enter_pass(String password)  {
		driver.findElement(By.name("password")).sendKeys(password);
	 
	}

	@Then("^click on login button$")
	public void click_on_login_button()  {
		WebElement submit = driver.findElement(By.xpath("//*[.='Login' and @class='ui fluid large blue submit button']"));	    
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", submit);
	}

	@Then("^User is on Home page after logged-in$")
	public void user_is_on_login_page() {
		String title = driver.getTitle();
	    System.out.println("Title of the page is "+title);
	    Assert.assertEquals("Cogmento CRM", title);
	    //driver.close();
	}
	
	@Then("^click on contact$")
	public void click_on_contact() throws InterruptedException  {
		driver.switchTo().defaultContent();
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[.='Contacts' and @class='item-text']")));
		WebElement contact =driver.findElement(By.xpath("//*[.='Contacts' and @class='item-text']"));
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", contact);
		System.out.println("clicked on contacts");
	}
	
	@Then("^add new contact$")
	public void add_new_contact() {
		
		js = (JavascriptExecutor) driver;
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@href='/contacts/new']/button")));
		WebElement new_contact = driver.findElement(By.xpath("//a[@href='/contacts/new']/button"));
		js.executeScript("arguments[0].click();",new_contact );
		//driver.findElement(By.xpath("//a[@href='/contacts/new']/button")).click();
		System.out.println("clicked on new contact");
	}

	@Then("^submit contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and save$")
	public void submit_contact_details_and_save(String fname,String lname, String position){
		//driver.navigate().refresh();
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@name='first_name']")));
		driver.findElement(By.xpath("//*[@name='first_name']")).sendKeys(fname);
		driver.findElement(By.xpath("//*[@name='last_name']")).sendKeys(lname);
		driver.findElement(By.xpath("//*[@name='position']")).sendKeys(position);
		driver.findElement(By.xpath("//*[@class='save icon']/..")).click();
	}



}
