package lumensPages;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import lumensDataProvider.lumensConfigReader;
import lumensUtils.LumensExcelReader;







public class TC001_CreateAccount {
	
	   WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC001_CreateAccount(WebDriver driver) {
		   this.driver=driver;
	   }

	   public void Accountcreation(String Firstname, String Lastname, String Email, String ConfirmEmail, String Password, String ConfirmPassword) {
		   
		   configfile = new lumensConfigReader();
	       prop = configfile.init_prop();
	       
	      
	       
	       driver.findElement(By.xpath(prop.getProperty("First_name"))).sendKeys(Firstname);
	       driver.findElement(By.xpath(prop.getProperty("Last_name"))).sendKeys(Lastname);
	       driver.findElement(By.xpath(prop.getProperty("Email_id"))).sendKeys(Email);
	       driver.findElement(By.xpath(prop.getProperty("Confirm_Email"))).sendKeys(ConfirmEmail);
	       driver.findElement(By.xpath(prop.getProperty("Create_Password"))).sendKeys(Password);
	       driver.findElement(By.xpath(prop.getProperty("Confirm_Password"))).sendKeys(ConfirmPassword);
	       
	       
	   }
	   
	   public void ClickCreateAccount() {
			configfile = new lumensConfigReader();
		       prop = configfile.init_prop();
		       driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
			  
	       driver.findElement(By.xpath(prop.getProperty("CreateAccount"))).click();
	      
	      
	   }
}
