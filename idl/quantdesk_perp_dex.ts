/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/quantdesk_perp_dex.json`.
 */
export type QuantdeskPerpDex = {
  "address": "8nt6uDabk35u9onRYq4DP1bhGu82kkEMYkvJsSFTqZ4G",
  "metadata": {
    "name": "quantdeskPerpDex",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "QuantDesk Perpetual DEX Smart Contracts"
  },
  "instructions": [
    {
      "name": "addCollateralV2",
      "discriminator": [
        23,
        208,
        240,
        192,
        6,
        29,
        206,
        240
      ],
      "accounts": [
        {
          "name": "portfolio",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "assetType",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "priceUsd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addCrossCollateral",
      "discriminator": [
        250,
        134,
        188,
        216,
        236,
        244,
        143,
        195
      ],
      "accounts": [
        {
          "name": "crossCollateralAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "oracleFeed"
        }
      ],
      "args": [
        {
          "name": "assetType",
          "type": {
            "defined": {
              "name": "collateralType"
            }
          }
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "authorizeAgent",
      "discriminator": [
        86,
        54,
        71,
        54,
        159,
        100,
        151,
        100
      ],
      "accounts": [
        {
          "name": "portfolio",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "delegatePubkey",
          "type": "pubkey"
        },
        {
          "name": "maxLeverage",
          "type": "u16"
        },
        {
          "name": "allowedMarkets",
          "type": {
            "array": [
              "pubkey",
              4
            ]
          }
        },
        {
          "name": "expiryTimestamp",
          "type": "i64"
        }
      ]
    },
    {
      "name": "cancelOrder",
      "discriminator": [
        95,
        129,
        237,
        240,
        8,
        49,
        223,
        132
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "userAccount",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "userAccount"
              },
              {
                "kind": "account",
                "path": "order.order_index",
                "account": "order"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true,
          "relations": [
            "order"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "checkSecurityBeforeTrading",
      "discriminator": [
        113,
        177,
        248,
        213,
        221,
        56,
        99,
        219
      ],
      "accounts": [
        {
          "name": "securityCircuitBreaker",
          "writable": true
        },
        {
          "name": "keeperSecurityManager",
          "writable": true
        },
        {
          "name": "oracleStalenessProtection",
          "writable": true
        },
        {
          "name": "pythPriceFeed"
        },
        {
          "name": "switchboardPriceFeed",
          "optional": true
        }
      ],
      "args": [
        {
          "name": "currentPrice",
          "type": "u64"
        },
        {
          "name": "currentVolume",
          "type": "u64"
        },
        {
          "name": "systemLoad",
          "type": "u16"
        }
      ]
    },
    {
      "name": "claimKeeperRewardSol",
      "discriminator": [
        119,
        3,
        182,
        10,
        182,
        190,
        67,
        224
      ],
      "accounts": [
        {
          "name": "keeperNetwork",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  110,
                  101,
                  116,
                  119,
                  111,
                  114,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "keeperRewardVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "keeper",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimSeat",
      "discriminator": [
        47,
        217,
        3,
        139,
        51,
        238,
        55,
        107
      ],
      "accounts": [
        {
          "name": "seat",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  97,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "market"
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "closePosition",
      "discriminator": [
        123,
        134,
        81,
        0,
        49,
        68,
        98,
        98
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "pythPriceFeed"
        },
        {
          "name": "switchboardPriceFeed",
          "optional": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "closeUserAccount",
      "discriminator": [
        236,
        181,
        3,
        71,
        194,
        18,
        151,
        191
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "configureMarketV2",
      "discriminator": [
        170,
        92,
        170,
        203,
        163,
        68,
        13,
        205
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "listingRecord"
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "maxOpenInterest",
          "type": "u64"
        },
        {
          "name": "maxLeverage",
          "type": "u16"
        },
        {
          "name": "initialMarginRatio",
          "type": "u16"
        },
        {
          "name": "maintenanceMarginRatio",
          "type": "u16"
        },
        {
          "name": "oracleSource",
          "type": "pubkey"
        },
        {
          "name": "oracleType",
          "type": "u8"
        },
        {
          "name": "initialOraclePrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createUserAccount",
      "discriminator": [
        146,
        68,
        100,
        69,
        63,
        46,
        182,
        199
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "arg",
                "path": "accountIndex"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "accountIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "depositCollateral",
      "discriminator": [
        156,
        131,
        142,
        116,
        146,
        247,
        162,
        120
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "protocolVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "collateralAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  83,
                  79,
                  76
                ]
              }
            ]
          }
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "solUsdPriceFeed",
          "docs": [
            "Pyth SOL/USD price feed account"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositNativeSol",
      "discriminator": [
        16,
        147,
        179,
        138,
        225,
        77,
        137,
        35
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "protocolVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "collateralAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  83,
                  79,
                  76
                ]
              }
            ]
          }
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "solUsdPriceFeed",
          "docs": [
            "Pyth SOL/USD price feed account"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositToQuantVault",
      "discriminator": [
        49,
        107,
        27,
        123,
        138,
        207,
        217,
        67
      ],
      "accounts": [
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "depositor",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  111,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "vault"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "vaultPortfolio",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositTokenCollateral",
      "discriminator": [
        166,
        149,
        10,
        43,
        93,
        64,
        84,
        127
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vault.mint",
                "account": "tokenVault"
              }
            ]
          }
        },
        {
          "name": "userTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "vault.mint",
                "account": "tokenVault"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "vault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "vault.mint",
                "account": "tokenVault"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "collateralAccount",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "lstPriceFeed"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "assetType",
          "type": {
            "defined": {
              "name": "collateralType"
            }
          }
        }
      ]
    },
    {
      "name": "executeAction",
      "discriminator": [
        246,
        137,
        105,
        113,
        247,
        6,
        223,
        174
      ],
      "accounts": [
        {
          "name": "pendingUpgrade",
          "writable": true
        },
        {
          "name": "programState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "executor",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "executeConditionalOrder",
      "discriminator": [
        41,
        108,
        144,
        244,
        28,
        207,
        141,
        254
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "userAccount",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "keeperNetwork",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  110,
                  101,
                  116,
                  119,
                  111,
                  114,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "executor",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "executeIcebergChunk",
      "discriminator": [
        17,
        189,
        160,
        255,
        75,
        174,
        97,
        51
      ],
      "accounts": [
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "userAccount"
              },
              {
                "kind": "account",
                "path": "order.order_index",
                "account": "order"
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "userAccount",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "pythPriceFeed",
          "docs": [
            "Pyth price feed for market price validation"
          ]
        },
        {
          "name": "switchboardPriceFeed",
          "docs": [
            "Optional Switchboard price feed"
          ],
          "optional": true
        },
        {
          "name": "executor",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "chunkSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "executeTwapChunk",
      "discriminator": [
        150,
        92,
        103,
        84,
        62,
        15,
        64,
        143
      ],
      "accounts": [
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "userAccount"
              },
              {
                "kind": "account",
                "path": "order.order_index",
                "account": "order"
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "userAccount",
          "writable": true,
          "relations": [
            "order"
          ]
        },
        {
          "name": "pythPriceFeed",
          "docs": [
            "Pyth price feed for market price validation"
          ]
        },
        {
          "name": "switchboardPriceFeed",
          "docs": [
            "Optional Switchboard price feed"
          ],
          "optional": true
        },
        {
          "name": "executor",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "chunkSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fundKeeperRewardSolVault",
      "discriminator": [
        46,
        71,
        1,
        68,
        183,
        11,
        212,
        42
      ],
      "accounts": [
        {
          "name": "keeperRewardVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeBackstopVault",
      "discriminator": [
        17,
        107,
        137,
        4,
        245,
        243,
        4,
        198
      ],
      "accounts": [
        {
          "name": "backstopVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  99,
                  107,
                  115,
                  116,
                  111,
                  112,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "insuranceBufferRatio",
          "type": "u16"
        }
      ]
    },
    {
      "name": "initializeCrossCollateralAccount",
      "discriminator": [
        215,
        32,
        248,
        216,
        198,
        40,
        118,
        3
      ],
      "accounts": [
        {
          "name": "crossCollateralAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  114,
                  111,
                  115,
                  115,
                  95,
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeFeeCollector",
      "discriminator": [
        197,
        234,
        132,
        77,
        108,
        38,
        60,
        215
      ],
      "accounts": [
        {
          "name": "feeCollector",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeInsuranceFund",
      "discriminator": [
        2,
        239,
        39,
        87,
        50,
        28,
        108,
        12
      ],
      "accounts": [
        {
          "name": "insuranceFund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  115,
                  117,
                  114,
                  97,
                  110,
                  99,
                  101,
                  95,
                  102,
                  117,
                  110,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "initialDeposit",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeKeeperRewardSolVault",
      "discriminator": [
        96,
        54,
        232,
        68,
        247,
        121,
        69,
        189
      ],
      "accounts": [
        {
          "name": "keeperRewardVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeKeeperSecurityManager",
      "discriminator": [
        186,
        180,
        89,
        15,
        199,
        4,
        221,
        232
      ],
      "accounts": [
        {
          "name": "keeperSecurityManager",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  109,
                  97,
                  110,
                  97,
                  103,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeMarket",
      "discriminator": [
        35,
        35,
        189,
        193,
        155,
        48,
        170,
        203
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "baseAsset"
              },
              {
                "kind": "arg",
                "path": "quoteAsset"
              }
            ]
          }
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "baseAsset",
          "type": "string"
        },
        {
          "name": "quoteAsset",
          "type": "string"
        },
        {
          "name": "initialPrice",
          "type": "u64"
        },
        {
          "name": "maxLeverage",
          "type": "u8"
        },
        {
          "name": "initialMarginRatio",
          "type": "u16"
        },
        {
          "name": "maintenanceMarginRatio",
          "type": "u16"
        }
      ]
    },
    {
      "name": "initializeMarketV2",
      "discriminator": [
        142,
        105,
        160,
        176,
        44,
        37,
        178,
        160
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "bids",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "market"
              }
            ]
          }
        },
        {
          "name": "asks",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  115,
                  107,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "market"
              }
            ]
          }
        },
        {
          "name": "listingRecord",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "arg",
                "path": "baseAsset"
              },
              {
                "kind": "arg",
                "path": "quoteAsset"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "baseAsset",
          "type": {
            "array": [
              "u8",
              8
            ]
          }
        },
        {
          "name": "quoteAsset",
          "type": {
            "array": [
              "u8",
              8
            ]
          }
        },
        {
          "name": "marketType",
          "type": "u8"
        },
        {
          "name": "tickSize",
          "type": "u64"
        },
        {
          "name": "lotSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeOracleStalenessProtection",
      "discriminator": [
        245,
        69,
        155,
        169,
        17,
        81,
        139,
        0
      ],
      "accounts": [
        {
          "name": "oracleStalenessProtection",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  97,
                  99,
                  108,
                  101,
                  95,
                  115,
                  116,
                  97,
                  108,
                  101,
                  110,
                  101,
                  115,
                  115,
                  95,
                  112,
                  114,
                  111,
                  116,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializePointsSystem",
      "discriminator": [
        13,
        74,
        208,
        207,
        160,
        91,
        242,
        166
      ],
      "accounts": [
        {
          "name": "pointsSystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  105,
                  110,
                  116,
                  115,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializePortfolio",
      "discriminator": [
        122,
        177,
        206,
        169,
        129,
        85,
        26,
        192
      ],
      "accounts": [
        {
          "name": "portfolio",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  114,
                  116,
                  102,
                  111,
                  108,
                  105,
                  111
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "subaccountIndex"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "relayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "subaccountIndex",
          "type": "u16"
        },
        {
          "name": "referrer",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeProgramState",
      "discriminator": [
        114,
        90,
        170,
        208,
        223,
        41,
        40,
        160
      ],
      "accounts": [
        {
          "name": "programState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeProtocolSolVault",
      "discriminator": [
        208,
        172,
        196,
        133,
        181,
        25,
        221,
        170
      ],
      "accounts": [
        {
          "name": "protocolVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeQuantVault",
      "discriminator": [
        137,
        126,
        199,
        249,
        54,
        42,
        44,
        254
      ],
      "accounts": [
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  113,
                  117,
                  97,
                  110,
                  116,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "leader"
              }
            ]
          }
        },
        {
          "name": "vaultPortfolio",
          "docs": [
            "The zero-copy portfolio that will execute the trades",
            "Security: Must be owned by the leader or a newly derived PDA for this vault."
          ],
          "writable": true
        },
        {
          "name": "leader",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "strategy",
          "type": {
            "defined": {
              "name": "marketMakingStrategy"
            }
          }
        },
        {
          "name": "performanceFee",
          "type": "u16"
        }
      ]
    },
    {
      "name": "initializeSecurityCircuitBreaker",
      "discriminator": [
        210,
        155,
        201,
        173,
        164,
        175,
        49,
        220
      ],
      "accounts": [
        {
          "name": "securityCircuitBreaker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeTokenVault",
      "discriminator": [
        64,
        202,
        113,
        205,
        22,
        210,
        178,
        225
      ],
      "accounts": [
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "mintAddress"
              }
            ]
          }
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "vault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "mintAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeUserPoints",
      "discriminator": [
        45,
        194,
        72,
        115,
        21,
        131,
        153,
        208
      ],
      "accounts": [
        {
          "name": "userPoints",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  112,
                  111,
                  105,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "liquidatePosition",
      "discriminator": [
        187,
        74,
        229,
        149,
        102,
        81,
        221,
        68
      ],
      "accounts": [
        {
          "name": "programState",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "keeperNetwork",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  110,
                  101,
                  116,
                  119,
                  111,
                  114,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "insuranceFund",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  115,
                  117,
                  114,
                  97,
                  110,
                  99,
                  101,
                  95,
                  102,
                  117,
                  110,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "backstopVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  99,
                  107,
                  115,
                  116,
                  111,
                  112,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "feeCollector",
          "writable": true
        },
        {
          "name": "securityCircuitBreaker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "oracleStalenessProtection",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  97,
                  99,
                  108,
                  101,
                  95,
                  115,
                  116,
                  97,
                  108,
                  101,
                  110,
                  101,
                  115,
                  115,
                  95,
                  112,
                  114,
                  111,
                  116,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              }
            ]
          }
        },
        {
          "name": "pythPriceFeed"
        },
        {
          "name": "switchboardPriceFeed",
          "optional": true
        },
        {
          "name": "liquidator",
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "matchOrders",
      "discriminator": [
        17,
        1,
        201,
        93,
        7,
        51,
        251,
        134
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "makerOrder",
          "writable": true
        },
        {
          "name": "takerOrder",
          "writable": true
        },
        {
          "name": "makerUserAccount",
          "writable": true
        },
        {
          "name": "takerUserAccount",
          "writable": true
        },
        {
          "name": "makerPosition",
          "writable": true
        },
        {
          "name": "takerPosition",
          "writable": true
        },
        {
          "name": "keeperNetwork",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  110,
                  101,
                  116,
                  119,
                  111,
                  114,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "keeper",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "matchSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPosition",
      "discriminator": [
        135,
        128,
        47,
        77,
        15,
        152,
        240,
        49
      ],
      "accounts": [
        {
          "name": "position",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "userAccount"
              },
              {
                "kind": "arg",
                "path": "positionIndex"
              }
            ]
          }
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "pythPriceFeed"
        },
        {
          "name": "switchboardPriceFeed",
          "optional": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "positionIndex",
          "type": "u16"
        },
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "positionSide"
            }
          }
        },
        {
          "name": "size",
          "type": "u64"
        },
        {
          "name": "leverage",
          "type": "u8"
        },
        {
          "name": "entryPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "placeOrder",
      "discriminator": [
        51,
        194,
        155,
        175,
        109,
        130,
        96,
        106
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "pythPriceFeed"
        },
        {
          "name": "switchboardPriceFeed",
          "optional": true
        },
        {
          "name": "order",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "userAccount"
              },
              {
                "kind": "account",
                "path": "user_account.next_order_index",
                "account": "userAccount"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "orderType"
            }
          }
        },
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "positionSide"
            }
          }
        },
        {
          "name": "size",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "stopPrice",
          "type": "u64"
        },
        {
          "name": "trailingDistance",
          "type": "u64"
        },
        {
          "name": "leverage",
          "type": "u8"
        },
        {
          "name": "expiresAt",
          "type": "i64"
        },
        {
          "name": "hiddenSize",
          "type": "u64"
        },
        {
          "name": "displaySize",
          "type": "u64"
        },
        {
          "name": "timeInForce",
          "type": {
            "defined": {
              "name": "timeInForce"
            }
          }
        },
        {
          "name": "targetPrice",
          "type": "u64"
        },
        {
          "name": "twapDuration",
          "type": "u64"
        },
        {
          "name": "twapInterval",
          "type": "u64"
        },
        {
          "name": "idempotencyKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "placeOrderV2",
      "discriminator": [
        232,
        111,
        115,
        196,
        237,
        143,
        62,
        204
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "bids",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "market"
              }
            ]
          }
        },
        {
          "name": "asks",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  115,
                  107,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "market"
              }
            ]
          }
        },
        {
          "name": "portfolio",
          "writable": true
        },
        {
          "name": "seat",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  97,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "relayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "jitMaker",
          "signer": true,
          "optional": true
        },
        {
          "name": "jitPortfolio",
          "writable": true,
          "optional": true
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        },
        {
          "name": "size",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proposeAction",
      "discriminator": [
        49,
        249,
        251,
        197,
        25,
        74,
        36,
        5
      ],
      "accounts": [
        {
          "name": "pendingUpgrade",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "proposer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "actionType",
          "type": "u8"
        },
        {
          "name": "targetAccount",
          "type": "pubkey"
        },
        {
          "name": "newValue",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "registerAsKeeper",
      "discriminator": [
        212,
        172,
        233,
        239,
        253,
        30,
        168,
        111
      ],
      "accounts": [
        {
          "name": "keeperNetwork",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  110,
                  101,
                  116,
                  119,
                  111,
                  114,
                  107
                ]
              }
            ]
          }
        },
        {
          "name": "keeper",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "stakeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "registerMarketListing",
      "discriminator": [
        108,
        103,
        3,
        230,
        76,
        230,
        206,
        137
      ],
      "accounts": [
        {
          "name": "listingRecord",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "arg",
                "path": "baseAsset"
              },
              {
                "kind": "arg",
                "path": "quoteAsset"
              }
            ]
          }
        },
        {
          "name": "protocolState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "protocolState"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "baseAsset",
          "type": {
            "array": [
              "u8",
              8
            ]
          }
        },
        {
          "name": "quoteAsset",
          "type": {
            "array": [
              "u8",
              8
            ]
          }
        },
        {
          "name": "listingStatus",
          "type": "u8"
        },
        {
          "name": "maxLeverage",
          "type": "u16"
        },
        {
          "name": "maxOpenInterest",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeCrossCollateral",
      "discriminator": [
        23,
        94,
        11,
        143,
        35,
        203,
        180,
        150
      ],
      "accounts": [
        {
          "name": "crossCollateralAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "assetType",
          "type": {
            "defined": {
              "name": "collateralType"
            }
          }
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setFixedOraclePrice",
      "discriminator": [
        27,
        249,
        127,
        33,
        59,
        36,
        30,
        220
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setMarketStatus",
      "discriminator": [
        101,
        175,
        83,
        107,
        200,
        141,
        155,
        182
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "isActive",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setReferrer",
      "discriminator": [
        115,
        251,
        55,
        0,
        166,
        189,
        25,
        74
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "referrerAccount",
          "docs": [
            "The account of the referrer for validation",
            "Security: Prevents circular referrals"
          ]
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "referrer",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setSecurityCouncil",
      "discriminator": [
        6,
        181,
        127,
        183,
        81,
        160,
        112,
        66
      ],
      "accounts": [
        {
          "name": "programState",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "programState"
          ]
        }
      ],
      "args": [
        {
          "name": "council",
          "type": {
            "array": [
              "pubkey",
              5
            ]
          }
        },
        {
          "name": "threshold",
          "type": "u8"
        }
      ]
    },
    {
      "name": "settleFunding",
      "discriminator": [
        11,
        251,
        12,
        161,
        199,
        228,
        133,
        87
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "settleGlobalPnl",
      "discriminator": [
        197,
        19,
        40,
        210,
        192,
        203,
        246,
        198
      ],
      "accounts": [
        {
          "name": "crossCollateralAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "stakeInBackstop",
      "discriminator": [
        159,
        143,
        140,
        180,
        182,
        59,
        93,
        250
      ],
      "accounts": [
        {
          "name": "backstopVault",
          "writable": true
        },
        {
          "name": "backstopProvider",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  99,
                  107,
                  115,
                  116,
                  111,
                  112,
                  95,
                  112,
                  114,
                  111,
                  118,
                  105,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tradeFromQuantVault",
      "discriminator": [
        118,
        154,
        237,
        134,
        31,
        50,
        71,
        120
      ],
      "accounts": [
        {
          "name": "vault"
        },
        {
          "name": "vaultPortfolio",
          "writable": true
        },
        {
          "name": "leader",
          "writable": true,
          "signer": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "bids",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "market"
              }
            ]
          }
        },
        {
          "name": "asks",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  115,
                  107,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "market"
              }
            ]
          }
        },
        {
          "name": "vaultSeat",
          "docs": [
            "The seat PDA for the VAULT (not the leader)"
          ]
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        },
        {
          "name": "size",
          "type": "u64"
        },
        {
          "name": "price",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateCollateralConfig",
      "discriminator": [
        87,
        81,
        178,
        108,
        188,
        71,
        197,
        125
      ],
      "accounts": [
        {
          "name": "collateralAccount",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "initialAssetWeight",
          "type": "u16"
        },
        {
          "name": "maintenanceAssetWeight",
          "type": "u16"
        }
      ]
    },
    {
      "name": "updateKeeperPerformance",
      "discriminator": [
        158,
        126,
        214,
        187,
        95,
        208,
        188,
        119
      ],
      "accounts": [
        {
          "name": "keeperNetwork",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "keeperPubkey",
          "type": "pubkey"
        },
        {
          "name": "performanceScore",
          "type": "u16"
        }
      ]
    },
    {
      "name": "updateMarketParameters",
      "discriminator": [
        183,
        69,
        5,
        76,
        114,
        136,
        129,
        65
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "maxLeverage",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "initialMarginRatio",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "maintenanceMarginRatio",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "fundingRateCap",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "updateOraclePrice",
      "discriminator": [
        14,
        35,
        163,
        150,
        65,
        116,
        149,
        154
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "priceFeed"
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updatePointsConfig",
      "discriminator": [
        15,
        89,
        27,
        201,
        127,
        239,
        187,
        80
      ],
      "accounts": [
        {
          "name": "pointsSystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  105,
                  110,
                  116,
                  115,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "tradingMultiplier",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "referralBonus",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "stakingMultiplier",
          "type": {
            "option": "u16"
          }
        }
      ]
    },
    {
      "name": "updatePositionMargin",
      "discriminator": [
        131,
        249,
        20,
        133,
        50,
        11,
        185,
        28
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "securityCircuitBreaker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "marginDelta",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updatePythPrice",
      "discriminator": [
        221,
        14,
        48,
        182,
        7,
        77,
        193,
        167
      ],
      "accounts": [
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "priceFeed",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatePythPullPrice",
      "discriminator": [
        0,
        162,
        73,
        72,
        45,
        218,
        37,
        98
      ],
      "accounts": [
        {
          "name": "keeper",
          "writable": true,
          "signer": true
        },
        {
          "name": "priceCache",
          "writable": true
        },
        {
          "name": "instructionsSysvar",
          "docs": [
            "We do this using custom validation inside the handler instead of the #[address] attribute",
            "which can cause macro errors in some anchor versions."
          ]
        }
      ],
      "args": [
        {
          "name": "priceFeedId",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "message",
          "type": "bytes"
        },
        {
          "name": "pubkey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "withdrawFromBackstop",
      "discriminator": [
        241,
        201,
        130,
        58,
        82,
        183,
        181,
        33
      ],
      "accounts": [
        {
          "name": "backstopVault",
          "writable": true
        },
        {
          "name": "backstopProvider",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  97,
                  99,
                  107,
                  115,
                  116,
                  111,
                  112,
                  95,
                  112,
                  114,
                  111,
                  118,
                  105,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "backstopProvider"
          ]
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawNativeSol",
      "discriminator": [
        201,
        104,
        187,
        105,
        80,
        204,
        84,
        138
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "protocolVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "collateralAccount",
          "writable": true
        },
        {
          "name": "securityCircuitBreaker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  99,
                  117,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  105,
                  114,
                  99,
                  117,
                  105,
                  116,
                  95,
                  98,
                  114,
                  101,
                  97,
                  107,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "oracleStalenessProtection",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  97,
                  99,
                  108,
                  101,
                  95,
                  115,
                  116,
                  97,
                  108,
                  101,
                  110,
                  101,
                  115,
                  115,
                  95,
                  112,
                  114,
                  111,
                  116,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              }
            ]
          }
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "solUsdPriceFeed",
          "docs": [
            "Pyth SOL/USD price feed account"
          ]
        },
        {
          "name": "switchboardPriceFeed",
          "optional": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawTokenCollateral",
      "discriminator": [
        102,
        136,
        166,
        215,
        176,
        213,
        201,
        254
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vault.mint",
                "account": "tokenVault"
              }
            ]
          }
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "vault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "vault.mint",
                "account": "tokenVault"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "userTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "vault.mint",
                "account": "tokenVault"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "collateralAccount",
          "writable": true
        },
        {
          "name": "programState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "lstPriceFeed"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "assetType",
          "type": {
            "defined": {
              "name": "collateralType"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "backstopProvider",
      "discriminator": [
        22,
        237,
        251,
        21,
        20,
        75,
        135,
        160
      ]
    },
    {
      "name": "backstopVault",
      "discriminator": [
        102,
        177,
        220,
        26,
        170,
        168,
        198,
        139
      ]
    },
    {
      "name": "circuitBreaker",
      "discriminator": [
        123,
        141,
        226,
        182,
        3,
        205,
        19,
        253
      ]
    },
    {
      "name": "collateralAccount",
      "discriminator": [
        134,
        2,
        192,
        39,
        194,
        239,
        19,
        17
      ]
    },
    {
      "name": "crossCollateralAccount",
      "discriminator": [
        112,
        77,
        228,
        123,
        169,
        206,
        150,
        99
      ]
    },
    {
      "name": "feeCollector",
      "discriminator": [
        250,
        213,
        73,
        200,
        175,
        76,
        225,
        213
      ]
    },
    {
      "name": "insuranceFund",
      "discriminator": [
        43,
        134,
        170,
        87,
        102,
        16,
        142,
        147
      ]
    },
    {
      "name": "keeperNetwork",
      "discriminator": [
        221,
        221,
        106,
        72,
        85,
        224,
        136,
        246
      ]
    },
    {
      "name": "keeperRewardSolVault",
      "discriminator": [
        25,
        129,
        188,
        72,
        75,
        172,
        110,
        183
      ]
    },
    {
      "name": "keeperSecurityManager",
      "discriminator": [
        233,
        246,
        148,
        76,
        153,
        110,
        204,
        62
      ]
    },
    {
      "name": "market",
      "discriminator": [
        219,
        190,
        213,
        55,
        0,
        227,
        198,
        154
      ]
    },
    {
      "name": "marketListingRecord",
      "discriminator": [
        122,
        31,
        125,
        70,
        162,
        120,
        77,
        29
      ]
    },
    {
      "name": "marketMakerVault",
      "discriminator": [
        86,
        116,
        163,
        39,
        0,
        107,
        244,
        89
      ]
    },
    {
      "name": "marketSeat",
      "discriminator": [
        232,
        97,
        199,
        18,
        159,
        34,
        114,
        33
      ]
    },
    {
      "name": "marketV2",
      "discriminator": [
        27,
        60,
        50,
        75,
        191,
        193,
        86,
        227
      ]
    },
    {
      "name": "oracleStalenessProtection",
      "discriminator": [
        72,
        70,
        119,
        236,
        19,
        161,
        65,
        240
      ]
    },
    {
      "name": "order",
      "discriminator": [
        134,
        173,
        223,
        185,
        77,
        86,
        28,
        51
      ]
    },
    {
      "name": "pendingUpgrade",
      "discriminator": [
        22,
        245,
        149,
        162,
        225,
        112,
        190,
        236
      ]
    },
    {
      "name": "pointsSystem",
      "discriminator": [
        43,
        247,
        82,
        251,
        197,
        81,
        122,
        11
      ]
    },
    {
      "name": "portfolioAccount",
      "discriminator": [
        45,
        106,
        240,
        82,
        4,
        127,
        117,
        29
      ]
    },
    {
      "name": "position",
      "discriminator": [
        170,
        188,
        143,
        228,
        122,
        64,
        247,
        208
      ]
    },
    {
      "name": "programState",
      "discriminator": [
        77,
        209,
        137,
        229,
        149,
        67,
        167,
        230
      ]
    },
    {
      "name": "protocolSolVault",
      "discriminator": [
        225,
        223,
        222,
        1,
        74,
        62,
        59,
        131
      ]
    },
    {
      "name": "securityCircuitBreaker",
      "discriminator": [
        181,
        179,
        250,
        226,
        65,
        89,
        135,
        111
      ]
    },
    {
      "name": "slabAccount",
      "discriminator": [
        181,
        52,
        208,
        133,
        154,
        154,
        5,
        102
      ]
    },
    {
      "name": "tokenVault",
      "discriminator": [
        121,
        7,
        84,
        254,
        151,
        228,
        43,
        144
      ]
    },
    {
      "name": "userAccount",
      "discriminator": [
        211,
        33,
        136,
        16,
        186,
        110,
        242,
        127
      ]
    },
    {
      "name": "userPointsAccount",
      "discriminator": [
        37,
        236,
        6,
        21,
        50,
        25,
        249,
        84
      ]
    },
    {
      "name": "vaultDepositor",
      "discriminator": [
        87,
        109,
        182,
        106,
        87,
        96,
        63,
        211
      ]
    }
  ],
  "events": [
    {
      "name": "bankruptcyRecorded",
      "discriminator": [
        163,
        138,
        252,
        170,
        108,
        221,
        168,
        131
      ]
    },
    {
      "name": "fundingRateUpdated",
      "discriminator": [
        14,
        161,
        238,
        38,
        236,
        94,
        57,
        59
      ]
    },
    {
      "name": "liquidationExecuted",
      "discriminator": [
        231,
        78,
        79,
        211,
        167,
        46,
        83,
        205
      ]
    },
    {
      "name": "oraclePriceUpdated",
      "discriminator": [
        170,
        138,
        188,
        200,
        123,
        50,
        49,
        104
      ]
    },
    {
      "name": "orderFilled",
      "discriminator": [
        120,
        124,
        109,
        66,
        249,
        116,
        174,
        30
      ]
    },
    {
      "name": "orderMatched",
      "discriminator": [
        211,
        0,
        178,
        174,
        61,
        245,
        45,
        250
      ]
    },
    {
      "name": "orderPlaced",
      "discriminator": [
        96,
        130,
        204,
        234,
        169,
        219,
        216,
        227
      ]
    },
    {
      "name": "pointsAwarded",
      "discriminator": [
        201,
        95,
        152,
        50,
        215,
        83,
        188,
        38
      ]
    },
    {
      "name": "positionClosed",
      "discriminator": [
        157,
        163,
        227,
        228,
        13,
        97,
        138,
        121
      ]
    },
    {
      "name": "positionOpened",
      "discriminator": [
        237,
        175,
        243,
        230,
        147,
        117,
        101,
        121
      ]
    },
    {
      "name": "referralRebateCredited",
      "discriminator": [
        19,
        120,
        8,
        129,
        170,
        148,
        141,
        125
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidAmount",
      "msg": "Invalid token amount"
    },
    {
      "code": 6001,
      "name": "vaultInactive",
      "msg": "Vault is inactive"
    },
    {
      "code": 6002,
      "name": "insufficientVaultBalance",
      "msg": "Insufficient vault balance"
    },
    {
      "code": 6003,
      "name": "unauthorizedTokenAuthority",
      "msg": "Unauthorized token authority"
    },
    {
      "code": 6004,
      "name": "unauthorizedTokenUser",
      "msg": "Unauthorized token user"
    },
    {
      "code": 6005,
      "name": "tokenAccountNotFound",
      "msg": "Token account not found"
    },
    {
      "code": 6006,
      "name": "invalidMintAddress",
      "msg": "Invalid mint address"
    }
  ],
  "types": [
    {
      "name": "assetBalance",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetType",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "valueUsd",
            "type": "u64"
          },
          {
            "name": "assetWeight",
            "type": "u16"
          },
          {
            "name": "liabilityWeight",
            "type": "u16"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "lastUpdate",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "backstopProvider",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "stakedAmount",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "lastStakeTimestamp",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "backstopVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalStaked",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "assetsUnderManagement",
            "type": "i64"
          },
          {
            "name": "lastTakeoverTimestamp",
            "type": "i64"
          },
          {
            "name": "withdrawalLockDuration",
            "type": "i64"
          },
          {
            "name": "insuranceBufferRatio",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "bankruptcyRecorded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventId",
            "type": "u64"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "badDebt",
            "type": "u64"
          },
          {
            "name": "insuranceCovered",
            "type": "u64"
          },
          {
            "name": "backstopVaultCovered",
            "type": "u64"
          },
          {
            "name": "unresolvedBadDebt",
            "type": "u64"
          },
          {
            "name": "recoveryModeActive",
            "type": "bool"
          },
          {
            "name": "adlModeActive",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "circuitBreaker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isTriggered",
            "type": "bool"
          },
          {
            "name": "triggerTime",
            "type": "i64"
          },
          {
            "name": "resetTime",
            "type": "i64"
          },
          {
            "name": "breakerType",
            "type": {
              "defined": {
                "name": "circuitBreakerType"
              }
            }
          },
          {
            "name": "triggeredBy",
            "type": "pubkey"
          },
          {
            "name": "resetBy",
            "type": "pubkey"
          },
          {
            "name": "priceChangeThreshold",
            "type": "u16"
          },
          {
            "name": "volumeThreshold",
            "type": "u64"
          },
          {
            "name": "timeWindow",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "circuitBreakerType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "priceVolatility"
          },
          {
            "name": "volumeSpike"
          },
          {
            "name": "systemOverload"
          },
          {
            "name": "emergencyStop"
          }
        ]
      }
    },
    {
      "name": "collateralAccount",
      "docs": [
        "Collateral State Module",
        "Contains account structures for collateral management",
        "User collateral account - tracks collateral deposited by individual users"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "assetType",
            "type": {
              "defined": {
                "name": "collateralType"
              }
            }
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "initialAssetWeight",
            "type": "u16"
          },
          {
            "name": "maintenanceAssetWeight",
            "type": "u16"
          },
          {
            "name": "initialLiabilityWeight",
            "type": "u16"
          },
          {
            "name": "maintenanceLiabilityWeight",
            "type": "u16"
          },
          {
            "name": "valueUsd",
            "type": "u64"
          },
          {
            "name": "lastPrice",
            "type": "u64"
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "collateralAsset",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetType",
            "type": {
              "defined": {
                "name": "collateralType"
              }
            }
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "valueUsd",
            "type": "u64"
          },
          {
            "name": "assetWeight",
            "type": "u16"
          },
          {
            "name": "liabilityWeight",
            "type": "u16"
          },
          {
            "name": "lastPriceUpdate",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "collateralType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "sol"
          },
          {
            "name": "usdc"
          },
          {
            "name": "btc"
          },
          {
            "name": "eth"
          },
          {
            "name": "usdt"
          },
          {
            "name": "avax"
          },
          {
            "name": "matic"
          },
          {
            "name": "arb"
          },
          {
            "name": "op"
          },
          {
            "name": "doge"
          },
          {
            "name": "ada"
          },
          {
            "name": "dot"
          },
          {
            "name": "link"
          },
          {
            "name": "rwaGold"
          },
          {
            "name": "lstSol"
          },
          {
            "name": "stableEuro"
          },
          {
            "name": "jitoSol"
          },
          {
            "name": "inf"
          }
        ]
      }
    },
    {
      "name": "crossCollateralAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "totalCollateralValue",
            "type": "u64"
          },
          {
            "name": "totalBorrowedValue",
            "type": "u64"
          },
          {
            "name": "collateralAssets",
            "type": {
              "vec": {
                "defined": {
                  "name": "collateralAsset"
                }
              }
            }
          },
          {
            "name": "initialAssetWeight",
            "type": "u16"
          },
          {
            "name": "maintenanceAssetWeight",
            "type": "u16"
          },
          {
            "name": "initialLiabilityWeight",
            "type": "u16"
          },
          {
            "name": "maintenanceLiabilityWeight",
            "type": "u16"
          },
          {
            "name": "imfFactor",
            "type": "u16"
          },
          {
            "name": "unrealizedPnl",
            "type": "i64"
          },
          {
            "name": "pendingFunding",
            "type": "i64"
          },
          {
            "name": "lastHealthCheck",
            "type": "i64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "feeCollector",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "makerFeeRate",
            "type": "u16"
          },
          {
            "name": "takerFeeRate",
            "type": "u16"
          },
          {
            "name": "fundingRateCap",
            "type": "i64"
          },
          {
            "name": "fundingRateFloor",
            "type": "i64"
          },
          {
            "name": "tradingFeesCollected",
            "type": "u64"
          },
          {
            "name": "fundingFeesCollected",
            "type": "u64"
          },
          {
            "name": "keeperRewardsPool",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "fundingRateUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "fundingRate",
            "type": "i64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "inlineOrder",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "orderType",
            "type": "u8"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "triggerPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "inlinePosition",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "entryPrice",
            "type": "u64"
          },
          {
            "name": "margin",
            "type": "u64"
          },
          {
            "name": "lastFundingIndex",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "insuranceFund",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalFunds",
            "type": "u64"
          },
          {
            "name": "utilizedFunds",
            "type": "u64"
          },
          {
            "name": "totalDeposits",
            "type": "u64"
          },
          {
            "name": "totalWithdrawals",
            "type": "u64"
          },
          {
            "name": "utilizationRate",
            "type": "u16"
          },
          {
            "name": "maxUtilization",
            "type": "u16"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "keeperAuth",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keeperPubkey",
            "type": "pubkey"
          },
          {
            "name": "stakeAmount",
            "type": "u64"
          },
          {
            "name": "performanceScore",
            "type": "u16"
          },
          {
            "name": "isActive",
            "type": "u8"
          },
          {
            "name": "lastActivity",
            "type": "i64"
          },
          {
            "name": "totalLiquidations",
            "type": "u32"
          },
          {
            "name": "successfulLiquidations",
            "type": "u32"
          },
          {
            "name": "failedLiquidations",
            "type": "u32"
          },
          {
            "name": "authorizationLevel",
            "type": {
              "defined": {
                "name": "keeperAuthLevel"
              }
            }
          }
        ]
      }
    },
    {
      "name": "keeperAuthLevel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "basic"
          },
          {
            "name": "advanced"
          },
          {
            "name": "emergency"
          }
        ]
      }
    },
    {
      "name": "keeperInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keeperPubkey",
            "type": "pubkey"
          },
          {
            "name": "stakeAmount",
            "type": "u64"
          },
          {
            "name": "performanceScore",
            "type": "u16"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "totalLiquidations",
            "type": "u32"
          },
          {
            "name": "totalRewardsEarned",
            "type": "u64"
          },
          {
            "name": "totalRewardsClaimed",
            "type": "u64"
          },
          {
            "name": "lastActivity",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "keeperNetwork",
      "docs": [
        "Advanced Features State Module",
        "Contains account structures for advanced features like keeper network, circuit breakers, etc."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalStake",
            "type": "u64"
          },
          {
            "name": "keepers",
            "type": {
              "vec": {
                "defined": {
                  "name": "keeperInfo"
                }
              }
            }
          },
          {
            "name": "liquidationRewardsPool",
            "type": "u64"
          },
          {
            "name": "automationRewardsPool",
            "type": "u64"
          },
          {
            "name": "minStakeRequirement",
            "type": "u64"
          },
          {
            "name": "performanceThreshold",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "keeperRewardSolVault",
      "docs": [
        "Dedicated SOL vault for future keeper reward settlement.",
        "This is intentionally separate from the shared user-collateral SOL vault."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "totalFunded",
            "type": "u64"
          },
          {
            "name": "totalReserved",
            "type": "u64"
          },
          {
            "name": "totalClaimed",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "keeperSecurityManager",
      "docs": [
        "Enhanced Keeper Authorization Security",
        "Provides 99% protection against unauthorized liquidations",
        "Optimized for gas efficiency using Anchor best practices",
        "",
        "EXPERT OPTIMIZATION NOTES (Solana/Anchor Experts):",
        "- Array sizes reduced from 20→3 keepers and 50→5 liquidation records for maximum stack efficiency",
        "- Box<T> optimization applied in initialization contexts to move from stack to heap",
        "- Account size now ~800 bytes (well under 4KB Solana limit)",
        "- ZeroCopy implementation REVERTED - too complex for this struct (enums, nested types)",
        "- Using aggressive Box<T> + smaller arrays for maximum stack efficiency"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "requiredSignatures",
            "type": "u8"
          },
          {
            "name": "authorizedKeepers",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "keeperAuth"
                  }
                },
                3
              ]
            }
          },
          {
            "name": "keeperCount",
            "type": "u8"
          },
          {
            "name": "liquidationWindowStart",
            "type": "i64"
          },
          {
            "name": "liquidationWindowEnd",
            "type": "i64"
          },
          {
            "name": "maxLiquidationsPerWindow",
            "type": "u32"
          },
          {
            "name": "liquidationRateLimit",
            "type": "u32"
          },
          {
            "name": "lastLiquidationTime",
            "type": "i64"
          },
          {
            "name": "liquidationsInCurrentHour",
            "type": "u32"
          },
          {
            "name": "minKeeperStake",
            "type": "u64"
          },
          {
            "name": "minPerformanceScore",
            "type": "u16"
          },
          {
            "name": "maxPositionSizeForLiquidation",
            "type": "u64"
          },
          {
            "name": "liquidationHistory",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "liquidationRecord"
                  }
                },
                5
              ]
            }
          },
          {
            "name": "historyIndex",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "liquidationExecuted",
      "docs": [
        "Events Module",
        "Contains all program events for monitoring and analytics"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "liquidatedSize",
            "type": "u64"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          },
          {
            "name": "penalty",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "liquidationReason",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "insufficientMargin"
          },
          {
            "name": "priceMovement"
          },
          {
            "name": "timeDecay"
          },
          {
            "name": "manual"
          }
        ]
      }
    },
    {
      "name": "liquidationRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "keeperPubkey",
            "type": "pubkey"
          },
          {
            "name": "positionOwner",
            "type": "pubkey"
          },
          {
            "name": "positionSize",
            "type": "u64"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "success",
            "type": "u8"
          },
          {
            "name": "reason",
            "type": {
              "defined": {
                "name": "liquidationReason"
              }
            }
          }
        ]
      }
    },
    {
      "name": "loadSnapshot",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "loadPercent",
            "type": "u16"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "market",
      "docs": [
        "Market state definition",
        "Handles market data, pricing, and market-specific operations"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseAsset",
            "type": "string"
          },
          {
            "name": "quoteAsset",
            "type": "string"
          },
          {
            "name": "baseReserve",
            "type": "u64"
          },
          {
            "name": "quoteReserve",
            "type": "u64"
          },
          {
            "name": "k",
            "type": "u64"
          },
          {
            "name": "fundingRate",
            "type": "i64"
          },
          {
            "name": "lastFundingTime",
            "type": "i64"
          },
          {
            "name": "fundingInterval",
            "type": "i64"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "maxLeverage",
            "type": "u8"
          },
          {
            "name": "initialMarginRatio",
            "type": "u16"
          },
          {
            "name": "maintenanceMarginRatio",
            "type": "u16"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "lastOraclePrice",
            "type": "u64"
          },
          {
            "name": "lastOracleUpdate",
            "type": "i64"
          },
          {
            "name": "cumulativeFundingIndex",
            "type": "i128"
          },
          {
            "name": "oracleSource",
            "type": "pubkey"
          },
          {
            "name": "oracleType",
            "type": "u8"
          },
          {
            "name": "baseAssetAmountLong",
            "type": "u64"
          },
          {
            "name": "baseAssetAmountShort",
            "type": "u64"
          },
          {
            "name": "maxOpenInterest",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "marketListingRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseAsset",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "quoteAsset",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "listingStatus",
            "type": "u8"
          },
          {
            "name": "maxLeverage",
            "type": "u16"
          },
          {
            "name": "maxOpenInterest",
            "type": "u64"
          },
          {
            "name": "registeredAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "marketMakerVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leader",
            "type": "pubkey"
          },
          {
            "name": "portfolio",
            "type": "pubkey"
          },
          {
            "name": "totalShares",
            "type": "u128"
          },
          {
            "name": "performanceFee",
            "type": "u16"
          },
          {
            "name": "minLeaderShare",
            "type": "u16"
          },
          {
            "name": "lockPeriod",
            "type": "i64"
          },
          {
            "name": "totalPnl",
            "type": "i64"
          },
          {
            "name": "strategy",
            "type": {
              "defined": {
                "name": "marketMakingStrategy"
              }
            }
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "marketMakingStrategy",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "gridTrading"
          },
          {
            "name": "meanReversion"
          },
          {
            "name": "arbitrage"
          },
          {
            "name": "copyTrading"
          },
          {
            "name": "quantModel"
          }
        ]
      }
    },
    {
      "name": "marketSeat",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "claimedAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "marketV2",
      "docs": [
        "On-Chain Market (V2 Unified Architecture)",
        "Consolidates pricing, risk, and the Limit Order Book (LOB) into a single Zero-Copy PDA.",
        "This enables atomic matching and settlement in a single transaction."
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "oracleSource",
            "type": "pubkey"
          },
          {
            "name": "jitAuthority",
            "type": "pubkey"
          },
          {
            "name": "baseAsset",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "quoteAsset",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "lastOraclePrice",
            "type": "u64"
          },
          {
            "name": "lastOracleUpdate",
            "type": "i64"
          },
          {
            "name": "tickSize",
            "type": "u64"
          },
          {
            "name": "lotSize",
            "type": "u64"
          },
          {
            "name": "maxOpenInterest",
            "type": "u64"
          },
          {
            "name": "baseAssetAmountLong",
            "type": "u64"
          },
          {
            "name": "baseAssetAmountShort",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "u16"
          },
          {
            "name": "makerRebate",
            "type": "u16"
          },
          {
            "name": "maxLeverage",
            "type": "u16"
          },
          {
            "name": "initialMarginRatio",
            "type": "u16"
          },
          {
            "name": "maintenanceMarginRatio",
            "type": "u16"
          },
          {
            "name": "marketType",
            "type": "u8"
          },
          {
            "name": "oracleType",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "oracleConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oracleType",
            "type": {
              "defined": {
                "name": "oracleType"
              }
            }
          },
          {
            "name": "oracleAccount",
            "type": "pubkey"
          },
          {
            "name": "lastPrice",
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "type": "i64"
          },
          {
            "name": "confidenceInterval",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "failureCount",
            "type": "u32"
          },
          {
            "name": "lastFailure",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "oracleDeviationBreaker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "primaryOraclePrice",
            "type": "u64"
          },
          {
            "name": "secondaryOraclePrice",
            "type": "u64"
          },
          {
            "name": "deviationThreshold",
            "type": "u16"
          },
          {
            "name": "lastTriggered",
            "type": "i64"
          },
          {
            "name": "triggerCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "oracleHealthRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "oracleType",
            "type": {
              "defined": {
                "name": "oracleType"
              }
            }
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "stalenessSeconds",
            "type": "i64"
          },
          {
            "name": "healthStatus",
            "type": {
              "defined": {
                "name": "oracleHealthStatus"
              }
            }
          },
          {
            "name": "confidenceInterval",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "oracleHealthStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "healthy"
          },
          {
            "name": "warning"
          },
          {
            "name": "critical"
          },
          {
            "name": "failed"
          }
        ]
      }
    },
    {
      "name": "oraclePriceUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "confidence",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "oracleStalenessProtection",
      "docs": [
        "Dynamic Oracle Staleness Protection",
        "Provides 90% protection against stale price attacks",
        "Optimized for Pyth/Switchboard integration based on expert recommendations"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "primaryOracle",
            "type": {
              "defined": {
                "name": "oracleConfig"
              }
            }
          },
          {
            "name": "secondaryOracle",
            "type": {
              "option": {
                "defined": {
                  "name": "oracleConfig"
                }
              }
            }
          },
          {
            "name": "maxStalenessSeconds",
            "type": "u64"
          },
          {
            "name": "warningStalenessSeconds",
            "type": "u64"
          },
          {
            "name": "criticalStalenessSeconds",
            "type": "u64"
          },
          {
            "name": "minPriceChangePercent",
            "type": "u16"
          },
          {
            "name": "maxPriceChangePercent",
            "type": "u16"
          },
          {
            "name": "priceValidationWindow",
            "type": "u64"
          },
          {
            "name": "oracleHealthHistory",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "oracleHealthRecord"
                  }
                },
                20
              ]
            }
          },
          {
            "name": "healthHistoryIndex",
            "type": "u8"
          },
          {
            "name": "emergencyPrice",
            "type": "u64"
          },
          {
            "name": "emergencyPriceTimestamp",
            "type": "i64"
          },
          {
            "name": "pythConfidenceThreshold",
            "type": "u64"
          },
          {
            "name": "switchboardDeviationThreshold",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "oracleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pyth"
          },
          {
            "name": "switchboard"
          },
          {
            "name": "fixedPrice"
          },
          {
            "name": "custom"
          }
        ]
      }
    },
    {
      "name": "order",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "userAccount",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "orderIndex",
            "type": "u16"
          },
          {
            "name": "orderType",
            "type": {
              "defined": {
                "name": "orderType"
              }
            }
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "positionSide"
              }
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "stopPrice",
            "type": "u64"
          },
          {
            "name": "trailingDistance",
            "type": "u64"
          },
          {
            "name": "leverage",
            "type": "u8"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "orderStatus"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "expiresAt",
            "type": "i64"
          },
          {
            "name": "filledSize",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "hiddenSize",
            "type": "u64"
          },
          {
            "name": "displaySize",
            "type": "u64"
          },
          {
            "name": "timeInForce",
            "type": {
              "defined": {
                "name": "timeInForce"
              }
            }
          },
          {
            "name": "targetPrice",
            "type": "u64"
          },
          {
            "name": "parentOrder",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "twapDuration",
            "type": "u64"
          },
          {
            "name": "twapInterval",
            "type": "u64"
          },
          {
            "name": "lastExecutionAt",
            "type": "i64"
          },
          {
            "name": "totalFeesPaid",
            "type": "u64"
          },
          {
            "name": "idempotencyKey",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "orderFilled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "order",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "positionSide"
              }
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "orderMatched",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "maker",
            "type": "pubkey"
          },
          {
            "name": "taker",
            "type": "pubkey"
          },
          {
            "name": "makerOrder",
            "type": "pubkey"
          },
          {
            "name": "takerOrder",
            "type": "pubkey"
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "orderPlaced",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "order",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "positionSide"
              }
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "orderType",
            "type": {
              "defined": {
                "name": "orderType"
              }
            }
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "orderStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pending"
          },
          {
            "name": "filled"
          },
          {
            "name": "cancelled"
          },
          {
            "name": "expired"
          },
          {
            "name": "partiallyFilled"
          },
          {
            "name": "rejected"
          }
        ]
      }
    },
    {
      "name": "orderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "market"
          },
          {
            "name": "limit"
          },
          {
            "name": "stopLoss"
          },
          {
            "name": "takeProfit"
          },
          {
            "name": "trailingStop"
          },
          {
            "name": "postOnly"
          },
          {
            "name": "ioc"
          },
          {
            "name": "fok"
          },
          {
            "name": "iceberg"
          },
          {
            "name": "twap"
          },
          {
            "name": "stopLimit"
          },
          {
            "name": "bracket"
          }
        ]
      }
    },
    {
      "name": "pendingUpgrade",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "actionType",
            "type": "u8"
          },
          {
            "name": "targetAccount",
            "type": "pubkey"
          },
          {
            "name": "newValue",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "proposer",
            "type": "pubkey"
          },
          {
            "name": "unlockTimestamp",
            "type": "i64"
          },
          {
            "name": "isExecuted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "pointsAwarded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "points",
            "type": "u64"
          },
          {
            "name": "category",
            "type": "string"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "pointsSystem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "tradingMultiplier",
            "type": "u16"
          },
          {
            "name": "referralBonus",
            "type": "u16"
          },
          {
            "name": "stakingMultiplier",
            "type": "u16"
          },
          {
            "name": "totalPointsDistributed",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "portfolioAccount",
      "docs": [
        "Unified Portfolio Account (V2)",
        "Consolidates balances, positions, and orders into a single Zero-Copy PDA.",
        "This matches the Phoenix/FlashTrade standard for sub-millisecond execution."
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "totalCollateralValue",
            "type": "u64"
          },
          {
            "name": "totalBorrowedValue",
            "type": "u64"
          },
          {
            "name": "unrealizedPnl",
            "type": "i64"
          },
          {
            "name": "pendingFunding",
            "type": "i64"
          },
          {
            "name": "balances",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "assetBalance"
                  }
                },
                8
              ]
            }
          },
          {
            "name": "positions",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "inlinePosition"
                  }
                },
                10
              ]
            }
          },
          {
            "name": "orders",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "inlineOrder"
                  }
                },
                16
              ]
            }
          },
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "relayerFeeBalance",
            "type": "u64"
          },
          {
            "name": "subaccountIndex",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "delegatePubkey",
            "type": "pubkey"
          },
          {
            "name": "delegatePolicy",
            "type": {
              "defined": {
                "name": "tradingPolicy"
              }
            }
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userAccount",
            "type": "pubkey"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "positionIndex",
            "type": "u16"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "positionSide"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "positionStatus"
              }
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "entryPrice",
            "type": "u64"
          },
          {
            "name": "currentPrice",
            "type": "u64"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          },
          {
            "name": "unrealizedPnl",
            "type": "i64"
          },
          {
            "name": "realizedPnl",
            "type": "i64"
          },
          {
            "name": "fundingRate",
            "type": "i64"
          },
          {
            "name": "lastFundingUpdate",
            "type": "i64"
          },
          {
            "name": "totalFundingPaid",
            "type": "i64"
          },
          {
            "name": "lastCumulativeFundingIndex",
            "type": "i128"
          },
          {
            "name": "totalFeesPaid",
            "type": "u64"
          },
          {
            "name": "initialMargin",
            "type": "u64"
          },
          {
            "name": "maintenanceMargin",
            "type": "u64"
          },
          {
            "name": "leverage",
            "type": "u16"
          },
          {
            "name": "margin",
            "type": "u64"
          },
          {
            "name": "totalCollateralValue",
            "type": "u64"
          },
          {
            "name": "collateralAccounts",
            "type": {
              "array": [
                "pubkey",
                5
              ]
            }
          },
          {
            "name": "openedAt",
            "type": "i64"
          },
          {
            "name": "closedAt",
            "type": "i64"
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "positionClosed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "positionSide"
              }
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "exitPrice",
            "type": "u64"
          },
          {
            "name": "pnl",
            "type": "i64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "positionOpened",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "position",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "side",
            "type": {
              "defined": {
                "name": "positionSide"
              }
            }
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "entryPrice",
            "type": "u64"
          },
          {
            "name": "leverage",
            "type": "u16"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "positionSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "long"
          },
          {
            "name": "short"
          }
        ]
      }
    },
    {
      "name": "positionStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "open"
          },
          {
            "name": "closed"
          },
          {
            "name": "liquidated"
          }
        ]
      }
    },
    {
      "name": "priceSnapshot",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "priceVolatilityBreaker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "lastPrice",
            "type": "u64"
          },
          {
            "name": "priceHistory",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "priceSnapshot"
                  }
                },
                10
              ]
            }
          },
          {
            "name": "historyIndex",
            "type": "u8"
          },
          {
            "name": "volatilityThreshold",
            "type": "u16"
          },
          {
            "name": "lastTriggered",
            "type": "i64"
          },
          {
            "name": "triggerCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "programState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "isPaused",
            "type": "bool"
          },
          {
            "name": "recoveryModeActive",
            "type": "bool"
          },
          {
            "name": "adlModeActive",
            "type": "bool"
          },
          {
            "name": "lastBankruptcyEventId",
            "type": "u64"
          },
          {
            "name": "lastBankruptcyTimestamp",
            "type": "i64"
          },
          {
            "name": "lastBankruptcyMarket",
            "type": "pubkey"
          },
          {
            "name": "lastBankruptcyUser",
            "type": "pubkey"
          },
          {
            "name": "insuranceFund",
            "type": "pubkey"
          },
          {
            "name": "backstopVault",
            "type": "pubkey"
          },
          {
            "name": "feeCollector",
            "type": "pubkey"
          },
          {
            "name": "oracleManager",
            "type": "pubkey"
          },
          {
            "name": "solOracleSource",
            "type": "pubkey"
          },
          {
            "name": "solOracleType",
            "type": "u8"
          },
          {
            "name": "securityCouncil",
            "type": {
              "array": [
                "pubkey",
                5
              ]
            }
          },
          {
            "name": "threshold",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "protocolSolVault",
      "docs": [
        "Protocol SOL Vault Account Structure"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalDeposits",
            "type": "u64"
          },
          {
            "name": "totalWithdrawals",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "referralRebateCredited",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "trader",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "securityCircuitBreaker",
      "docs": [
        "Multi-Layer Circuit Breaker System",
        "Provides 95% protection against price manipulation attacks",
        "Optimized for gas efficiency based on Solana expert recommendations"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceVolatilityBreaker",
            "type": {
              "defined": {
                "name": "priceVolatilityBreaker"
              }
            }
          },
          {
            "name": "volumeSpikeBreaker",
            "type": {
              "defined": {
                "name": "volumeSpikeBreaker"
              }
            }
          },
          {
            "name": "oracleDeviationBreaker",
            "type": {
              "defined": {
                "name": "oracleDeviationBreaker"
              }
            }
          },
          {
            "name": "systemOverloadBreaker",
            "type": {
              "defined": {
                "name": "systemOverloadBreaker"
              }
            }
          },
          {
            "name": "isGlobalBreakerActive",
            "type": "bool"
          },
          {
            "name": "globalBreakerTriggeredAt",
            "type": "i64"
          },
          {
            "name": "globalBreakerResetAt",
            "type": "i64"
          },
          {
            "name": "emergencyPauseActive",
            "type": "bool"
          },
          {
            "name": "maxPriceChangePercent",
            "type": "u16"
          },
          {
            "name": "maxVolumeSpikePercent",
            "type": "u16"
          },
          {
            "name": "maxOracleDeviationPercent",
            "type": "u16"
          },
          {
            "name": "maxSystemLoadPercent",
            "type": "u16"
          },
          {
            "name": "priceWindowSeconds",
            "type": "u64"
          },
          {
            "name": "volumeWindowSeconds",
            "type": "u64"
          },
          {
            "name": "oracleWindowSeconds",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "slab",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "root",
            "type": "u32"
          },
          {
            "name": "freeHead",
            "type": "u32"
          },
          {
            "name": "totalNodes",
            "type": "u32"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "nodes",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "slabNode"
                  }
                },
                22000
              ]
            }
          }
        ]
      }
    },
    {
      "name": "slabAccount",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "slab",
            "type": {
              "defined": {
                "name": "slab"
              }
            }
          }
        ]
      }
    },
    {
      "name": "slabNode",
      "repr": {
        "kind": "c",
        "align": 8
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u32"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "data",
            "type": {
              "array": [
                "u8",
                80
              ]
            }
          }
        ]
      }
    },
    {
      "name": "systemOverloadBreaker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "currentLoad",
            "type": "u16"
          },
          {
            "name": "loadHistory",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "loadSnapshot"
                  }
                },
                10
              ]
            }
          },
          {
            "name": "historyIndex",
            "type": "u8"
          },
          {
            "name": "loadThreshold",
            "type": "u16"
          },
          {
            "name": "lastTriggered",
            "type": "i64"
          },
          {
            "name": "triggerCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "timeInForce",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "gtc"
          },
          {
            "name": "ioc"
          },
          {
            "name": "fok"
          },
          {
            "name": "gtd"
          },
          {
            "name": "postOnly"
          }
        ]
      }
    },
    {
      "name": "tokenVault",
      "docs": [
        "Vault Management Module",
        "Following Solana Cookbook patterns for professional token management",
        "https://solanacookbook.com/references/programs.html#token-program",
        "Token Vault Account Structure"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "totalDeposits",
            "type": "u64"
          },
          {
            "name": "totalWithdrawals",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tradingPolicy",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxLeverage",
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "allowedMarkets",
            "type": {
              "array": [
                "pubkey",
                4
              ]
            }
          },
          {
            "name": "expiryTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "accountIndex",
            "type": "u16"
          },
          {
            "name": "totalCollateral",
            "type": "u64"
          },
          {
            "name": "totalPositions",
            "type": "u16"
          },
          {
            "name": "totalOrders",
            "type": "u16"
          },
          {
            "name": "nextOrderIndex",
            "type": "u16"
          },
          {
            "name": "maxPositions",
            "type": "u16"
          },
          {
            "name": "initialMarginRequirement",
            "type": "u64"
          },
          {
            "name": "maintenanceMarginRequirement",
            "type": "u64"
          },
          {
            "name": "availableMargin",
            "type": "u64"
          },
          {
            "name": "accountHealth",
            "type": "u16"
          },
          {
            "name": "liquidationPrice",
            "type": "u64"
          },
          {
            "name": "liquidationThreshold",
            "type": "u16"
          },
          {
            "name": "maxLeverage",
            "type": "u16"
          },
          {
            "name": "totalFundingPaid",
            "type": "i64"
          },
          {
            "name": "totalFundingReceived",
            "type": "i64"
          },
          {
            "name": "totalFeesPaid",
            "type": "u64"
          },
          {
            "name": "totalRebatesEarned",
            "type": "u64"
          },
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "lastActivity",
            "type": "i64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userPointsAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "totalPoints",
            "type": "u64"
          },
          {
            "name": "tradingPoints",
            "type": "u64"
          },
          {
            "name": "referralPoints",
            "type": "u64"
          },
          {
            "name": "stakingPoints",
            "type": "u64"
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "vaultDepositor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "shares",
            "type": "u128"
          },
          {
            "name": "lastDepositAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "volumeSnapshot",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "volume",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "volumeSpikeBreaker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "currentVolume",
            "type": "u64"
          },
          {
            "name": "volumeHistory",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "volumeSnapshot"
                  }
                },
                10
              ]
            }
          },
          {
            "name": "historyIndex",
            "type": "u8"
          },
          {
            "name": "spikeThreshold",
            "type": "u16"
          },
          {
            "name": "lastTriggered",
            "type": "i64"
          },
          {
            "name": "triggerCount",
            "type": "u32"
          }
        ]
      }
    }
  ]
};
