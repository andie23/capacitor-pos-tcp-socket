package com.fiscalpy.pos.tcp;

import android.util.Base64;
import com.getcapacitor.JSObject;
import com.getcapacitor.JSArray;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.OutputStream;
import java.net.Socket;

@CapacitorPlugin(name = "PosTcpSocket")
public class PosTcpSocketPlugin extends Plugin {
    private static final int SOCKET_TIMEOUT = 2500;

    @PluginMethod
    public void sendToSocket(PluginCall call) {
        Integer port = call.getInt("port");
        String host = call.getString("host");
        String data = call.getString("base64BinaryData");

        if (host == null || data == null || port == null) {
            call.reject("host, data and port are required");
            return;
        }

        getBridge().execute(() -> {
            try {
                byte[] bytes = Base64.decode(data, Base64.DEFAULT);
                Socket socket = new Socket(host, port);
                OutputStream out = socket.getOutputStream();
                socket.setSoTimeout(SOCKET_TIMEOUT); // Read timeout
                out.write(bytes);
                out.flush();
                socket.close();
                call.resolve();
            } catch (Exception e) { 
                call.reject(e.getMessage());
            }
        });
    }
}
