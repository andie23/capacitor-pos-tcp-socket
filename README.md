# capacitor-pos-tcp-socket

Unlimited access to POS/ESC command type printers on a local LAN or WiFi

## Install

```bash
npm install capacitor-pos-tcp-socket
npx cap sync
```

## API

<docgen-index>

* [`sendToSocket(...)`](#sendtosocket)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendToSocket(...)

```typescript
sendToSocket(options: SocketParams) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#socketparams">SocketParams</a></code> |

--------------------


### Interfaces


#### SocketParams

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`host`**             | <code>string</code> |
| **`port`**             | <code>number</code> |
| **`base64BinaryData`** | <code>string</code> |

</docgen-api>
# capacitor-pos-tcp-socket
