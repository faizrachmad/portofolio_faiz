import SideMenuPage from "../pageobject/sideMenu.page";
import { login } from "../../utils/login";
import mappingMechanic from "../pageobject/mappingMechanic";

describe("Test - menu mapping mekanik", () => {
  it("should login when using valid credential for coordinator @agrrizky7676", async () => {
    await login("testDMSCoordinator", "Astra@123", "testDMSCoordinator", [
      "Dashboard",
      "DMS",
      "DMS Data",
    ]);
  });

  it("can open a mapping mechanic page after logged in as coordinator @agrrizky7676", async () => {
    await SideMenuPage.openMappingMechanic();
    await mappingMechanic.verifyPage("Maintain Mapping Mechanic");
  });
});
