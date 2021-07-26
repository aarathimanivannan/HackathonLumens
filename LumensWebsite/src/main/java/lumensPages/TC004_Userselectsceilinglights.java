package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC004_Userselectsceilinglights {
	
	
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC004_Userselectsceilinglights(WebDriver driver) {
		   this.driver=driver;
	   }
	   
	   public void selectceilinglights() throws Exception{
	   
	   configfile = new lumensConfigReader();
	   prop = configfile.init_prop();
	   Actions actions = new Actions(driver); 
	   driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	   
		
		  WebElement Lighting = driver.findElement(By.xpath(prop.getProperty("Lighting")));
		  actions.moveToElement(Lighting).build().perform();
		  Thread.sleep(2000);
		  WebElement Ceilinglightsbtn = driver.findElement(By.xpath(prop.getProperty("CeilingLights")));
		  actions.moveToElement(Ceilinglightsbtn); actions.click().build().perform();
		
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	   }
		  
		  public void selectLargechandeliers() {
			   configfile = new lumensConfigReader();
			   prop = configfile.init_prop();
		  driver.findElement(By.xpath(prop.getProperty("Chandeliers"))).click();
		  driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
		  driver.findElement(By.xpath(prop.getProperty("LargeChandeliers"))).click();
		  driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
	   }
}
  