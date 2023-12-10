import SideMenuPage from "../pageobject/sideMenu.page";
import planningBoardPage from "../pageobject/planningBoardPage";
import { login } from "../../utils/login";

describe("Test menu planning board ", () => {
  it("should login when using valid credential for coordinator @agrrizky7676", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
  });

  it("@TCMSADMOB-161 should open a planning board page after logged in as coordinator @agrrizky7676", async () => {
    await SideMenuPage.goToPlanningBoard();
    await planningBoardPage.verifyPage(
      "DMS Planning Board Manage Planning Board"
    );
  });

  it("Change date", async () => {
    const date = new Date();
    const tomorrow = date.getDate() + 1;
    const month = date.getMonth();
    const year = date.getFullYear().toString();
    await planningBoardPage.takeDate(tomorrow, month, year);
  });
});
