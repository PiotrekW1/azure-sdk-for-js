/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const CommunicationRelayConfigurationRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationRelayConfigurationRequest",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationRelayConfiguration: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationRelayConfiguration",
    modelProperties: {
      expiresOn: {
        serializedName: "expiresOn",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      iceServers: {
        serializedName: "iceServers",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "CommunicationIceServer" }
          }
        }
      }
    }
  }
};

export const CommunicationIceServer: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIceServer",
    modelProperties: {
      urls: {
        serializedName: "urls",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "String" } }
        }
      },
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String"
        }
      },
      credential: {
        serializedName: "credential",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "CommunicationError" }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};
