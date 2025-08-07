import { app } from "@/scripts/firebase";
import auth from "@/scripts/auth";
import domain from "@/scripts/domain";

// Main Application Boot Script
async function boot() {
  console.info("Booting Application...");

  // Perform any necessary initialization here
  const domainData = await domain.getData();

  console.log(domainData, app);

  try {
    console.info("Authenticating User...");
    const user = await auth.getUserData();

    // Proceed with user-specific operations
    console.info("User ID:", user.uid);
  } catch (error) {
    console.error("Authentication Failed:", error);
  }

  // Initialize services, load configurations, etc.
  console.info("Initializing Services...");

  console.info("Application Booted Successfully");
}

export { boot };
