const { ManagedIdentityCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new ManagedIdentityCredential("50ae3701-8e7a-421f-8f79-dbce496fa64c");

const vaultName = "tpick-vault";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "test";

async function main() {
  console.log("Welcome to key");
  const secret = await client.getSecret(secretName);
  console.log("Secret value:", secret.value);
}

main();
