const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

const vaultName = "tpick";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "test";

async function main() {
  console.log("Welcome to key")
  const secret = await client.getSecret(secretName);
  console.log("Secret value:", secret.value)
}

main();
