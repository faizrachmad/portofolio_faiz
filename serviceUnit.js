import SideMenuPage from "../pageobject/sideMenu.page";
import { login } from "../../utils/login";
import serviceUnitPage from "../pageobject/serviceUnit.page";

describe("Test menu DMS Data", () => {
  it("should login when using valid credential for coordinator @agrrizky7676", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
  });

  it("can open a Service Unit page after logged in as coordinator @agrrizky7676", async () => {
    await SideMenuPage.openServiceUnit();
    await serviceUnitPage.verifyPage("Maintain Service Unit");
  });

  it("can use advance search by vehicle type @agrrizky7676", async () => {
    await serviceUnitPage.advancedSearch("Motor");
  });
});
