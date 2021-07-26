package Hackathon.LumensWebsite;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

import org.junit.runner.RunWith;

 
@RunWith(Cucumber.class)
@CucumberOptions(
       
		features="src/test/resources/LumensFeature",
		glue = {"LumensStepDefinition"} ,		 	
              plugin = { "pretty","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html","html:test-output"},    
             monochrome=true,
                dryRun=false
                    )
public class LumensRunnerFile extends AbstractTestNGCucumberTests {

}
