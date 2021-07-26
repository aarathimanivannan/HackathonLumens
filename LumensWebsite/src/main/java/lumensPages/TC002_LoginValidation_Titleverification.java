package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;



public class TC002_LoginValidation_Titleverification {
	
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC002_LoginValidation_Titleverification(WebDriver driver) {
		   this.driver=driver;
	   }
	   
	   public static WebDriver Driver;
	   
		
		  public void clickLogin() throws InterruptedException {
		  
		  configfile = new lumensConfigReader();
		  prop = configfile.init_prop(); Thread.sleep(1000);
		  
			Actions actions = new Actions(driver);
			
			WebElement Account = driver.findElement(By.xpath(prop.getProperty("Account")));
			actions.moveToElement(Account).click().build().perform();
			 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
			 
			 driver.findElement(By.xpath(prop.getProperty("MyAccount"))).click();
		   driver.manage().timeouts().implicitlyWait(70,TimeUnit.SECONDS);
		  
		  }
		 
	   
		
		  public void enterlogincredentials(String EmailUsername, String Password) {
		  
		  
		  configfile = new lumensConfigReader(); 
		  prop = configfile.init_prop();
		  
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  
		  driver.findElement(By.xpath(prop.getProperty("Username"))).sendKeys(EmailUsername);
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  driver.findElement(By.xpath(prop.getProperty("Password"))).sendKeys(Password);
		  
		  
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  
		  
		  }
		 

	   public void LoggedIn() throws InterruptedException {
		   configfile = new lumensConfigReader();
		   prop = configfile.init_prop();
		   Thread.sleep(3000);
			/*
			 * }
			 * 
			 * public void getWindowTitle(String ActualTitle) { String getTitle =
			 * Driver.getTitle(); try { Assert.assertEquals(ActualTitle, getTitle);
			 * System.out.println(getTitle+"\tTitle Matched"); }catch(Exception E) {
			 * System.out.println(E); } }
			 */
		   driver.findElement(By.xpath(prop.getProperty("LogIn"))).click();

}}