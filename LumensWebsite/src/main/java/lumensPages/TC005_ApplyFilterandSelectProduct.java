package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC005_ApplyFilterandSelectProduct {
	
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC005_ApplyFilterandSelectProduct(WebDriver driver) {
		   this.driver=driver;
	   }
	   
	   public void selectproduct() throws Exception{
	   
	   configfile = new lumensConfigReader();
	   prop = configfile.init_prop();
	   
	   driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
	   Actions actions = new Actions(driver); 
	   driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	   WebElement Lighting = driver.findElement(By.xpath(prop.getProperty("Lighting")));
		  actions.moveToElement(Lighting).build().perform();
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  WebElement Ceilinglightsbtn = driver.findElement(By.xpath(prop.getProperty("CeilingLights")));
		  actions.moveToElement(Ceilinglightsbtn); actions.click().build().perform();
		  
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  driver.findElement(By.xpath(prop.getProperty("Chandeliers"))).click();
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  driver.findElement(By.xpath(prop.getProperty("LargeChandeliers"))).click();
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  driver.findElement(By.xpath(prop.getProperty("Readytoship"))).click();
		  driver.manage().timeouts().implicitlyWait(70,TimeUnit.SECONDS);
		  Thread.sleep(3000);
		  //driver.findElement(By.xpath(prop.getProperty("Style"))).click();
		  //driver.manage().timeouts().implicitlyWait(80,TimeUnit.SECONDS);
		  driver.findElement(By.xpath(prop.getProperty("Selectprod"))).click();
		  driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);

	   }

}
