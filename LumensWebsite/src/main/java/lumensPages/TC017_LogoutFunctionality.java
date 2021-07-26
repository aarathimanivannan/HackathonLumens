package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC017_LogoutFunctionality {

	
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC017_LogoutFunctionality(WebDriver driver) {
		   this.driver=driver;
	   }
	   
	   public void Logout(){
	   
	   configfile = new lumensConfigReader();
	   prop = configfile.init_prop();
	   
	   Actions actions = new Actions(driver);
		
		WebElement Account = driver.findElement(By.xpath(prop.getProperty("Accountlog")));
		actions.moveToElement(Account).click().build().perform();
		 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		 driver.findElement(By.xpath(prop.getProperty("Signout"))).click();
	   
	   }
}
