using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace DotnetPlaywrightTests
{
    [TestClass]
    public class LoginTests : PageTest
    {
        [TestMethod]
        public async Task ShouldAllowAUserToLogInSuccessfully()
        {
            // Base URL is configured in playwright.config.ts for JS, but for .NET we need to specify it or configure it.
            // For simplicity, let's assume the app is running on http://localhost:3000 as it's a React app.
            await Page.GotoAsync("http://localhost:3000/");

            // Fill in the username and password
            await Page.FillAsync("input[name=\"username\"]", "testuser");
            await Page.FillAsync("input[name=\"password\"]", "testpass");

            // Click the login button
            await Page.ClickAsync("button:has-text(\"Sign In\")");

            // Expect to see the dashboard content and not the login form
            await Expect(Page.Locator("h1")).ToHaveTextAsync("Welcome to the Dashboard!");
            await Expect(Page.Locator("input[name=\"username\"]")).ToBeHiddenAsync();
            await Expect(Page.Locator("input[name=\"password\"]")).ToBeHiddenAsync();
            await Expect(Page.Locator("button:has-text(\"Sign In\")")).ToBeHiddenAsync();
        }

        [TestMethod]
        public async Task ShouldDisplayAnErrorWithInvalidCredentials()
        {
            await Page.GotoAsync("http://localhost:3000/");

            // Fill in invalid username and password
            await Page.FillAsync("input[name=\"username\"]", "wronguser");
            await Page.FillAsync("input[name=\"password\"]", "wrongpass");

            // Click the login button
            await Page.ClickAsync("button:has-text(\"Sign In\")");

            // Expect an error message to be visible
            await Expect(Page.Locator("text=Invalid username or password.")).ToBeVisibleAsync();
            // Expect to remain on the login page (login elements still visible)
            await Expect(Page.Locator("input[name=\"username\"]")).ToBeVisibleAsync();
            await Expect(Page.Locator("input[name=\"password\"]")).ToBeVisibleAsync();
            await Expect(Page.Locator("button:has-text(\"Sign In\")")).ToBeVisibleAsync();
        }
    }
}
