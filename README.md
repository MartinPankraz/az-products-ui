# az-products-ui
Fiori Project to get you started with [SAP BTP Private Link Service for Azure](https://help.sap.com/viewer/product/PRIVATE_LINK/CLOUD/en-US).

This app was built from SAP's Fiori template for SAPUI5 freestyle.

Find my blog post series on the topic [here]().

Additional Resources |
--- |
[Java Cloud SDK backend Project](https://github.com/MartinPankraz/az-private-linky) |
[CAP backend Project](https://github.com/MartinPankraz/az-private-linky-cap) |
[SAP's tutorial with CF CLI commands](https://developers.sap.com/tutorials/private-link-microsoft-azure.html) |
[SAP's official blog](https://blogs.sap.com/2021/06/28/sap-private-link-service-beta-is-available/) |

We used the `/sap/opu/odata/sap/epm_ref_apps_prod_man_srv` OData service for this project.

## Project context
[Azure Private Link Service](https://docs.microsoft.com/en-us/azure/private-link/private-link-service-overview) allows private connectivity between resources running on Azure in different environments. That includes SAP's Business Technology Platform when provisioned on Azure. SAP made that functionality available via a CloudFoundry Service.

Meaning you get now a managed component to expose your SAP backends to BTP on Azure without the need for a Cloud Connector. I listed a couple of backend targets that might be of interest. We developed against S4 primarily.

![Architecture overview](/application/src/main/webapp/priv-lnk-overview.png)

## Destination config
key | value |
--- | --- |
Name | my-private-linky-dest |
URL | https://path/to/deployed/backend |
Proxy Type | Internet |
Authentication | whatever you require here.|

### Additional Properties
key | value |
--- | --- |
HTML5.DynamicDestination | true |
WebIDEEnabled | true |
WebIDEUsage | odata_abap |

Reach out via the [GitHub Issues page](https://github.com/MartinPankraz/az-products-ui/issues) of this reposto talk about it some more :-)